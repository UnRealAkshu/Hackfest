function selectService(serviceName) {
    localStorage.setItem('selectedService', serviceName);  // Save selected service
    window.location.href = 'location.html';  // Redirect to the location page
}
