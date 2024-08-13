function FindProxyForURL(url, host) {
    // If the hostname matches example.com, use the proxy
    if (dnsDomainIs(host, "azure.com")) {
        return "PROXY localhost:3128";
    }
    return "DIRECT";
}