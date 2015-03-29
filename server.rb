require 'webrick'
require 'json'

puts 'Server started: http://localhost:3000/'

root = File.expand_path '.'
server = WEBrick::HTTPServer.new :Port => 3000, :DocumentRoot => root

trap 'INT' do server.shutdown end

server.start
