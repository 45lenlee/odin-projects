require 'socket'
require 'json'             

server = TCPServer.open(2000)  
loop {
  Thread.start(server.accept) do |client|                       

    request_header = client.gets


    path = request_header.split[1][1..-1] # gets path from request header
    if File.exists?(path)
      response_body = File.read(path)
      client.puts "HTTP/1.1 200 OK\r\nContent-type:text/html\r\n\r\n"
     # params = {}
     # params = JSON.parse(request_body)
     # p params

      client.puts response_body.gsub("<%= yield %>", "<li></li><li></li>")
    else
      client.puts "HTTP/1.1 404 Not Found\r\n\r\n"
      client.puts "404 Error, File Could not be Found"
    end
   
    client.close
  end

}