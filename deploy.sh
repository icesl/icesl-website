#!/bin/bash
set -o errexit

# Salim Perchy 17-01-2019
# -- Website deployment script --
# this script needs to be in the root path of the website's jekyll code to work correctly
# variable 'server' points to the folder where the icesl server is mounted (e.g., \\alcor\websites\icesl)


server=~/Servers/icesl

echo Building website...
rm -rf _site

if [ "$1" = "test" ]; then
  bundle exe jekyll serve
else
  bundle exe jekyll build --baseurl "https://icesl.loria.fr"

  echo Cleaning old website
  rm -rf $server/htdocs/*

  echo Copying new website
  cp -r _site/* $server/htdocs/.

  echo Setting permissions to MFX members
  cd $server/htdocs
  chgrp -R mfx *
  chmod -R g+w *

  echo Deployment complete!
fi
