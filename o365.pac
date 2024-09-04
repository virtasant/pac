function FindProxyForURL(url, host)
{
    var direct = "DIRECT";
    var proxyServer = "PROXY localhost:3128";
 

 


    if(shExpMatch(host, "*.sharepoint.com")
 || shExpMatch(host, "outlook.cloud.microsoft")
 || shExpMatch(host, "outlook.office.com")
 || shExpMatch(host, "outlook.office365.com"))
    {
        return direct;
    }
 
    return proxyServer;
}
