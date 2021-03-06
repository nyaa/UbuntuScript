#!/bin/bash
q3config="$HOME/.q3a/baseq3/autoexec.cfg"
wget32="ioquake3-1.36-7.1.i386.run"
wget64="ioquake3-1.36-7.1.x86_64.run"
url=http://q3.zengile.com/system/q3files


#echo "Type your nickname:"
#read nick
nick=`whoami`
#echo "Type your resolution width, for 1280x1024 it is 1280:"
#read width
width=800
#echo "Type your resolution height for 1280x1024 it is 1024:"
#read height
height=600

sudo apt-get --assume-yes install axel unzip
#mv -v .q3a .q3a-backup

mkdir -pv $HOME/.q3a/baseq3
mkdir -pv $HOME/.q3a/missionpack

echo "seta name \"$nick\"" | tee -a $q3config
echo "r_customWidth $width" | tee -a $q3config
echo "r_customHeight $height" | tee -a $q3config
echo "r_mode -1" | tee -a $q3config
echo "vid_restart" | tee -a $q3config


cd /tmp
#http://ioquake3.org/extras/patch-data/
echo "Downloading common quake3 resourses files.."
axel -a $url/quake3-latest-pk3s.zip
echo "Downloading maps.."
axel -a $url/quake3-maps.zip
#quake gold cd
echo "Downloading pak0.pk3 file.."
axel -a $url/PAK0.PK3
mv -v PAK0.PK3 $HOME/.q3a/baseq3
unzip quake3-latest-pk3s.zip && rm -v quake3-latest-pk3s.zip
unzip quake3-maps.zip && rm -v quake3-maps.zip
cd quake3-latest-pk3s
cp -v baseq3/* $HOME/.q3a/baseq3 
cp -v missionpack/* $HOME/.q3a/missionpack
cd quake3-maps
cp -v *.pk3 $HOME/.q3a/baseq3

rm -rf quake3-latest-pk3s/
rm -rf quake3-maps/

if [ $(uname -m) == 'x86_64' ]; then
  wget -N http://ioquake3.org/files/1.36/installer/$wget64
  LANG=C sudo sh $wget64 
else
  wget -N http://ioquake3.org/files/1.36/installer/$wget32 
  LANG=C sudo sh $wget32 
fi

rm -v ioquake3-1*
