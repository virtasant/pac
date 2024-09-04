function FindProxyForURL(url, host)
{
    // Define proxy server
    var proxyserver = "SOCKS5 127.0.0.1:8022";
    // Make host lowercase
    var lhost = host.toLowerCase();
    host = lhost;
    //SUB-FQDNs of ExpressRoutable wildcards which need to be explicitly sent to the proxy at the top of the PAC because they arent ER routable
    if ((shExpMatch(host, "quicktips.skypeforbusiness.com")))
               				
    {
        return proxyserver;
    }
    //EXPRESS ROUTE DIRECT
    else if ((isPlainHostName(host))
            || (shExpMatch(host, "*.auth.microsoft.com"))  
                        || (shExpMatch(host, "*.compliance.microsoft.com"))  
                        || (shExpMatch(host, "*.lync.com"))  
                        || (shExpMatch(host, "*.mail.protection.outlook.com"))  
                        || (shExpMatch(host, "*.msftidentity.com"))  
                        || (shExpMatch(host, "*.msidentity.com"))  
                        || (shExpMatch(host, "*.mx.microsoft"))  
                        || (shExpMatch(host, "*.officeapps.live.com"))  
                        || (shExpMatch(host, "*.online.office.com"))  
                        || (shExpMatch(host, "*.protection.office.com"))  
                        || (shExpMatch(host, "*.protection.outlook.com"))  
                        || (shExpMatch(host, "*.security.microsoft.com"))  
                        || (shExpMatch(host, "*.sharepoint.com"))  
                        || (shExpMatch(host, "*.teams.microsoft.com"))  
                        || (shExpMatch(host, "account.activedirectory.windowsazure.com"))  
                        || (shExpMatch(host, "accounts.accesscontrol.windows.net"))  
                        || (shExpMatch(host, "adminwebservice.microsoftonline.com"))  
                        || (shExpMatch(host, "api.passwordreset.microsoftonline.com"))  
                        || (shExpMatch(host, "autologon.microsoftazuread-sso.com"))  
                        || (shExpMatch(host, "becws.microsoftonline.com"))  
                        || (shExpMatch(host, "ccs.login.microsoftonline.com"))  
                        || (shExpMatch(host, "clientconfig.microsoftonline-p.net"))  
                        || (shExpMatch(host, "companymanager.microsoftonline.com"))  
                        || (shExpMatch(host, "compliance.microsoft.com"))  
                        || (shExpMatch(host, "defender.microsoft.com"))  
                        || (shExpMatch(host, "device.login.microsoftonline.com"))  
                        || (shExpMatch(host, "graph.microsoft.com"))  
                        || (shExpMatch(host, "graph.windows.net"))  
                        || (shExpMatch(host, "login-us.microsoftonline.com"))  
                        || (shExpMatch(host, "login.microsoft.com"))  
                        || (shExpMatch(host, "login.microsoftonline-p.com"))  
                        || (shExpMatch(host, "login.microsoftonline.com"))  
                        || (shExpMatch(host, "login.windows.net"))  
                        || (shExpMatch(host, "logincert.microsoftonline.com"))  
                        || (shExpMatch(host, "loginex.microsoftonline.com"))  
                        || (shExpMatch(host, "nexus.microsoftonline-p.com"))  
                        || (shExpMatch(host, "office.live.com"))  
                        || (shExpMatch(host, "outlook.cloud.microsoft"))  
                        || (shExpMatch(host, "outlook.office.com"))  
                        || (shExpMatch(host, "outlook.office365.com"))  
                        || (shExpMatch(host, "outlook.office365.com"))  
                        || (shExpMatch(host, "passwordreset.microsoftonline.com"))  
                        || (shExpMatch(host, "protection.office.com"))  
                        || (shExpMatch(host, "provisioningapi.microsoftonline.com"))  
                        || (shExpMatch(host, "purview.microsoft.com"))  
                        || (shExpMatch(host, "security.microsoft.com"))  
                        || (shExpMatch(host, "smtp.office365.com"))  
                        || (shExpMatch(host, "teams.microsoft.com"))  
                   )
    {
        return proxyserver;
    }

        //Catchall for all other traffic to proxy
    else
    {
        return "DIRECT";
    }
}
