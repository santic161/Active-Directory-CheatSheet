# Netexec - Enumerate Users via SMB

Cmd: netexec smb [IP/DOMAIN] -u [USER] -p [PASSWORD] --users | awk '{print $5}'
Page: CrackMapExec | NetExec (https://www.notion.so/CrackMapExec-NetExec-21a49f86f0b080bba75bc113ec40cb69?pvs=21) 
Tags: Authenticated, Crackmapexec, Enumerate Users, Enumeration, Netexec

```bash
netexec smb [IP/DOMAIN] -u [USER] -p [PASSWORD] --users | awk '{print $5}'
```