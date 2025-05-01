import socket, pathlib

HOST = '127.0.0.1'
PORT = 8080

serverSocket = socket.socket()
serverSocket.bind((HOST, PORT))
serverSocket.listen(1)
print(f"Listening on {HOST}:{PORT}")

while True:
    connection, address = serverSocket.accept()

    filenameLength = int.from_bytes(connection.recv(4), 'big')
    filePath = pathlib.Path.cwd() / "server" / "data" / connection.recv(filenameLength).decode()

    with open(filePath, 'wb') as f:
        while True:
            data = connection.recv(1024)
            if not data:
                break
            f.write(data)

    print("File received")
    connection.close()