#!/bin/bash
set -o errexit

# Salim Perchy 17-01-2019
# -- Website deployment script --
# this script needs to be in the root path of the website's jekyll code to work correctly
# variable 'server' points to the folder where the icesl server is mounted (e.g., \\alcor\websites\icesl)


server=~/Documents/Servers/loria

echo Building website...
rm -rf _site

if [ "$1" = "test" ]; then
  bundle exe jekyll serve
else
  bundle exe jekyll build --baseurl "https://icesl.loria.fr"

  echo Saving slicecrafter log
  cp -f $server/htdocs/slicecrafter/log/log.txt _site/slicecrafter/log/.

  echo Saving webprinter log
  cp -f $server/htdocs/webprinter/log/log.txt _site/webprinter/log/.

  echo Saving counter log
  cp -f $server/htdocs/assets/other/counter.txt _site/assets/other/.

  echo Cleaning old website
  rm -rf $server/htdocs/*

  echo Copying new website
  cp -r _site/* $server/htdocs/.

  echo Setting permissions to MFX members
  cd $server/htdocs
  #chgrp -R mfx *
  chmod -R g+w *
  chmod a+rw slicecrafter/log/log.txt
  chmod a+rw webprinter/log/log.txt
  chmod a+rw assets/other/counter.txt

  echo Deployment complete!
fi
