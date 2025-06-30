
  const imageElement = document.getElementById('heroImage');
  const images = JSON.parse(localStorage.getItem('heroImages')) || [
  "https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/509171521_122170465400334321_4909452073607627272_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xV1kyFBELm0Q7kNvwFCRC_Y&_nc_oc=Adn7EI_htLDmcDoV5nJKSuxmjlgOyDk_y1OzkLdkCaRG-5_XOjW0btaPEvMrmpkRX4h7pXI711Jowudi7tocx77o&_nc_zt=23&_nc_ht=scontent.fisb1-2.fna&_nc_gid=WaK4VqAWK1fVn1ScCADNYQ&oh=00_AfOovdmHepnms_VT5gsd5KFFIzS-5BTJSxnKk3aMYeCecQ&oe=686560A4",
  "https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/509171521_122170465400334321_4909452073607627272_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xV1kyFBELm0Q7kNvwFCRC_Y&_nc_oc=Adn7EI_htLDmcDoV5nJKSuxmjlgOyDk_y1OzkLdkCaRG-5_XOjW0btaPEvMrmpkRX4h7pXI711Jowudi7tocx77o&_nc_zt=23&_nc_ht=scontent.fisb1-2.fna&_nc_gid=WaK4VqAWK1fVn1ScCADNYQ&oh=00_AfOovdmHepnms_VT5gsd5KFFIzS-5BTJSxnKk3aMYeCecQ&oe=686560A4",
  "https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/509171521_122170465400334321_4909452073607627272_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xV1kyFBELm0Q7kNvwFCRC_Y&_nc_oc=Adn7EI_htLDmcDoV5nJKSuxmjlgOyDk_y1OzkLdkCaRG-5_XOjW0btaPEvMrmpkRX4h7pXI711Jowudi7tocx77o&_nc_zt=23&_nc_ht=scontent.fisb1-2.fna&_nc_gid=WaK4VqAWK1fVn1ScCADNYQ&oh=00_AfOovdmHepnms_VT5gsd5KFFIzS-5BTJSxnKk3aMYeCecQ&oe=686560A4",
  "https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/509171521_122170465400334321_4909452073607627272_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xV1kyFBELm0Q7kNvwFCRC_Y&_nc_oc=Adn7EI_htLDmcDoV5nJKSuxmjlgOyDk_y1OzkLdkCaRG-5_XOjW0btaPEvMrmpkRX4h7pXI711Jowudi7tocx77o&_nc_zt=23&_nc_ht=scontent.fisb1-2.fna&_nc_gid=WaK4VqAWK1fVn1ScCADNYQ&oh=00_AfOovdmHepnms_VT5gsd5KFFIzS-5BTJSxnKk3aMYeCecQ&oe=686560A4"
];

  
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    imageElement.style.opacity = 0;
    setTimeout(() => {
      imageElement.src = images[index];
      imageElement.style.opacity = 1;
    }, 500);
  }, 3000);