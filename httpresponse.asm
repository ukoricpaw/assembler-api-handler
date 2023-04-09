.386
.model flat,stdcall
option casemap:none

include \masm32\include\windows.inc
include \masm32\include\wininet.inc
include \masm32\include\kernel32.inc
include \masm32\include\masm32.inc
include \masm32\include\user32.inc
includelib \masm32\lib\wininet.lib
includelib \masm32\lib\kernel32.lib
includelib \masm32\lib\user32.lib
includelib \masm32\lib\masm32.lib

.data
szAgent db "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",0
szUrl db 16384 dup(?)
szBuffer db 16384 dup(?)
dwBufferSize dd 16384
filename db "response.txt",0
bytesWritten DWORD ?

.code
main proc
invoke StdIn, ADDR szUrl, 16384 ; вводим URL с консоли

invoke InternetOpen, ADDR szAgent, INTERNET_OPEN_TYPE_DIRECT, NULL, NULL, NULL
mov ebx, eax

invoke InternetOpenUrl, ebx, ADDR szUrl, NULL, 0, INTERNET_FLAG_RELOAD, NULL
mov esi, eax

invoke InternetReadFile, esi, ADDR szBuffer, dwBufferSize, ADDR dwBufferSize
test eax, eax
jz exit_program

invoke CreateFile, ADDR filename, GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL

invoke StdOut, addr szBuffer
; invoke WriteFile, eax, ADDR szBuffer, LENGTHOF szBuffer, ADDR bytesWritten, NULL

exit_program:
invoke CloseHandle, eax
invoke InternetCloseHandle, esi
invoke InternetCloseHandle, ebx

invoke ExitProcess, 0
main endp
end main