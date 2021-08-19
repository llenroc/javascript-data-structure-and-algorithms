(() => {

    const myArray = {
        "dealerServices": [{
            "servicesForBrand": "C",
            "services": [{
                "serviceCode": "BLNK",
                "serviceName": "Business Link"
            }, {
                "serviceCode": "CFAD",
                "serviceName": "Customer First Award"
            }, {
                "serviceCode": "CPOV",
                "serviceName": "Certified Pre-Owned Vehicles"
            }, {
                "serviceCode": "EXPO",
                "serviceName": "Express Lane Oil Change"
            }, {
                "serviceCode": "FWIFI",
                "serviceName": "Free WiFi"
            }, {
                "serviceCode": "MACC",
                "serviceName": "Mopar Accessories"
            }, {
                "serviceCode": "MPPT",
                "serviceName": "Mopar Performance Parts"
            }, {
                "serviceCode": "MPVP",
                "serviceName": "Mopar® Vehicle Protection"
            }, {
                "serviceCode": "OLSHP",
                "serviceName": "Online shopping"
            }, {
                "serviceCode": "OPSA",
                "serviceName": "Open Saturday"
            }, {
                "serviceCode": "PCMT",
                "serviceName": "Price Match Guarantee"
            }, {
                "serviceCode": "RENT",
                "serviceName": "Rental Service"
            }, {
                "serviceCode": "SHTL",
                "serviceName": "Shuttle Service"
            }, {
                "serviceCode": "SPAN",
                "serviceName": "Have Spanish Speaking Personnel"
            }, {
                "serviceCode": "TIRE",
                "serviceName": "Sell Tires"
            }]
        }, {
            "servicesForBrand": "D",
            "services": [{
                "serviceCode": "BLNK",
                "serviceName": "Business Link"
            }, {
                "serviceCode": "CFAD",
                "serviceName": "Customer First Award"
            }, {
                "serviceCode": "CPOV",
                "serviceName": "Certified Pre-Owned Vehicles"
            }, {
                "serviceCode": "EXPO",
                "serviceName": "Express Lane Oil Change"
            }, {
                "serviceCode": "FWIFI",
                "serviceName": "Free WiFi"
            }, {
                "serviceCode": "MACC",
                "serviceName": "Mopar Accessories"
            }, {
                "serviceCode": "MPPT",
                "serviceName": "Mopar Performance Parts"
            }, {
                "serviceCode": "MPVP",
                "serviceName": "Mopar® Vehicle Protection"
            }, {
                "serviceCode": "OLSHP",
                "serviceName": "Online shopping"
            }, {
                "serviceCode": "OPSA",
                "serviceName": "Open Saturday"
            }, {
                "serviceCode": "PCMT",
                "serviceName": "Price Match Guarantee"
            }, {
                "serviceCode": "RENT",
                "serviceName": "Rental Service"
            }, {
                "serviceCode": "SHTL",
                "serviceName": "Shuttle Service"
            }, {
                "serviceCode": "SPAN",
                "serviceName": "Have Spanish Speaking Personnel"
            }, {
                "serviceCode": "TIRE",
                "serviceName": "Sell Tires"
            }]
        }, {
            "servicesForBrand": "J",
            "services": [{
                "serviceCode": "BLNK",
                "serviceName": "Business Link"
            }, {
                "serviceCode": "CFAD",
                "serviceName": "Customer First Award"
            }, {
                "serviceCode": "CPOV",
                "serviceName": "Certified Pre-Owned Vehicles"
            }, {
                "serviceCode": "EXPO",
                "serviceName": "Express Lane Oil Change"
            }, {
                "serviceCode": "FWIFI",
                "serviceName": "Free WiFi"
            }, {
                "serviceCode": "MACC",
                "serviceName": "Mopar Accessories"
            }, {
                "serviceCode": "MPPT",
                "serviceName": "Mopar Performance Parts"
            }, {
                "serviceCode": "MPVP",
                "serviceName": "Mopar® Vehicle Protection"
            }, {
                "serviceCode": "OLSHP",
                "serviceName": "Online shopping"
            }, {
                "serviceCode": "OPSA",
                "serviceName": "Open Saturday"
            }, {
                "serviceCode": "PCMT",
                "serviceName": "Price Match Guarantee"
            }, {
                "serviceCode": "RENT",
                "serviceName": "Rental Service"
            }, {
                "serviceCode": "SHTL",
                "serviceName": "Shuttle Service"
            }, {
                "serviceCode": "SPAN",
                "serviceName": "Have Spanish Speaking Personnel"
            }, {
                "serviceCode": "TIRE",
                "serviceName": "Sell Tires"
            }]
        }, {
            "servicesForBrand": "R",
            "services": [{
                "serviceCode": "BLNK",
                "serviceName": "Business Link"
            }, {
                "serviceCode": "CFAD",
                "serviceName": "Customer First Award"
            }, {
                "serviceCode": "CHCB",
                "serviceName": "4500/5500 Chassis Cabs"
            }, {
                "serviceCode": "CPOV",
                "serviceName": "Certified Pre-Owned Vehicles"
            }, {
                "serviceCode": "EXPO",
                "serviceName": "Express Lane Oil Change"
            }, {
                "serviceCode": "FWIFI",
                "serviceName": "Free WiFi"
            }, {
                "serviceCode": "MACC",
                "serviceName": "Mopar Accessories"
            }, {
                "serviceCode": "MPPT",
                "serviceName": "Mopar Performance Parts"
            }, {
                "serviceCode": "MPVP",
                "serviceName": "Mopar® Vehicle Protection"
            }, {
                "serviceCode": "OLSHP",
                "serviceName": "Online shopping"
            }, {
                "serviceCode": "OPSA",
                "serviceName": "Open Saturday"
            }, {
                "serviceCode": "PCMT",
                "serviceName": "Price Match Guarantee"
            }, {
                "serviceCode": "RENT",
                "serviceName": "Rental Service"
            }, {
                "serviceCode": "SHTL",
                "serviceName": "Shuttle Service"
            }, {
                "serviceCode": "SPAN",
                "serviceName": "Have Spanish Speaking Personnel"
            }, {
                "serviceCode": "TIRE",
                "serviceName": "Sell Tires"
            }]
        }, {
            "servicesForBrand": "X",
            "services": [{
                "serviceCode": "BLNK",
                "serviceName": "Business Link"
            }, {
                "serviceCode": "CFAD",
                "serviceName": "Customer First Award"
            }, {
                "serviceCode": "CPOV",
                "serviceName": "Certified Pre-Owned Vehicles"
            }]
        }, {
            "servicesForBrand": "Y",
            "services": []
        }]
    };

    const getServicesMap = (serviceData) => {
        return serviceData.reduce((result, service) => {
            result = { ...result, [service.serviceCode] : service }
            return result;
        }, {});
    }

    const dealerServicesMap = myArray.dealerServices.reduce((result, dealer) => {
        result = { ...result, [dealer.servicesForBrand]: getServicesMap(dealer.services) }
        return result;
    }, {});

    console.log(dealerServicesMap);

    const intersection = (set1, set2) => {
        return set1.filter(item => set2.indexOf(item) !== -1);
    }

    const inputString = "C";
    const brandList = inputString.split(",");
    const getCommonServices = brandList.reduce((result, current, index) => {
        let getKeys = Object.keys(dealerServicesMap[current]);
        if ( index === 0) result = getKeys;
        else result = intersection(getKeys, result);
        return result;
    }, []);

    console.log(getCommonServices);

    const output = getCommonServices.reduce((result, current) => {
        result = [...result, ...[dealerServicesMap[brandList[0]][current]]];
        return result;
    }, []);
    console.log(output);
})();
