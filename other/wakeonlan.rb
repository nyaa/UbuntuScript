#!/usr/bin/env ruby
require 'rubygems'
require 'net/ssh'
require 'highline/import'
#gem install net-ssh
#gem install highline

HOST = ARGV[0]
PORT = ARGV[1]
USER = ARGV[2]


def get_password
return ask("Enter your password:  ") { |q| q.echo = "*" }
end

if HOST && USER
#password = get_password
#Net::SSH.start( HOST, USER,:port => '5190', :password => password ) do|ssh|
Net::SSH.start( HOST, USER,:port => '5190') do|ssh|
  puts "logged in"
  puts ssh.exec!('uptime')
  puts ssh.exec!('ether-wake 00:1a:4d:5d:d0:33')
end
else
puts "Not enough parametres, usage: wakeonlan.rb Ip UserName Command"
end
