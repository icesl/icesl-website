#!/bin/bash
set -o errexit

# Salim Perchy 17-01-2019
# -- Website deployment script --
# this script needs to be in the root path of the website's jekyll code to work correctly
# variable 'server' points to the folder where the icesl server is mounted (e.g., \\alcor\websites\icesl)

# Salim Perchy 17-01-2019
# udpated with new server domain

echo Building website...
rm -rf _site

if [ "$1" = "test" ]; then
  bundle exe jekyll serve
else
  bundle exe jekyll build --baseurl "https://icesl.loria.fr"

  server_user=yperchy
  server_url=sic-nfs.loria.fr
  server_folder=/local/web-serveurs/icesl
  server_dir=htdocs

  echo Saving web-forge log
  scp $server_user@$server_url:$server_folder/$server_dir/icesl-online/log/log.txt _site/icesl-online/log/.

  echo Saving slicecrafter log
  scp $server_user@$server_url:$server_folder/$server_dir/slicecrafter/log/log.txt _site/slicecrafter/log/.

  echo Saving webprinter log
  scp $server_user@$server_url:$server_folder/$server_dir/webprinter/log/log.txt _site/webprinter/log/.

  echo Saving counter log
  scp $server_user@$server_url:$server_folder/$server_dir/assets/other/counter.txt _site/assets/other/.

  echo Cleaning old website
  ssh $server_user@$server_url rm -rf $server_folder/$server_dir/*

  echo Copying new website
  scp -r _site/* $server_user@$server_url:$server_folder/$server_dir/.

  echo Setting permissions to MFX members
  #ssh $server_user@$server_url chgrp -R mfx $server_folder/$server_dir/*
  ssh $server_user@$server_url chmod -R g+w $server_folder/$server_dir/*
  ssh $server_user@$server_url chmod a+rw $server_folder/$server_dir/icesl-online/log/log.txt
  ssh $server_user@$server_url chmod a+rw $server_folder/$server_dir/slicecrafter/log/log.txt
  ssh $server_user@$server_url chmod a+rw $server_folder/$server_dir/webprinter/log/log.txt
  ssh $server_user@$server_url chmod a+rw $server_folder/$server_dir/assets/other/counter.txt

  echo Deployment complete!
  exit
fi
