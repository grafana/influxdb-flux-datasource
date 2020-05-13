#!/bin/bash
echo rebuilding...
#make build-darwin-debug
mage build:debug
echo rebuild done
echo restarting process...
pkill gpx_splunk_darwin_amd64
if [ $? -eq 0 ]; then
  echo restarted
else
  echo no process detected
fi
