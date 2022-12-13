document.getElementById("jeans2").style.display = "none";

function produktAnzeige(nr){
    if (nr === 1){
document.getElementById("jeans").style.display = "block";
document.getElementById("jeans2").style.display = "none";
    }
    if (nr === 2){
        document.getElementById("jeans").style.display = "none";
        document.getElementById("jeans2").style.display = "block";
        
    }
}



function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'black',
          layout: 'vertical',
          label: 'buynow',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"description":"Jeans Wide Leg Dark","amount":{"currency_code":"EUR","value":65,"breakdown":{"item_total":{"currency_code":"EUR","value":60},"shipping":{"currency_code":"EUR","value":5},"tax_total":{"currency_code":"EUR","value":0}}}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-darkjeans');
            element.innerHTML = '';
            element.innerHTML = '<h3>Danke für die Bezahlung!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-darkjeans');

      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'black',
          layout: 'vertical',
          label: 'buynow',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"description":"Jeans Wide Leg Bright","amount":{"currency_code":"EUR","value":65,"breakdown":{"item_total":{"currency_code":"EUR","value":60},"shipping":{"currency_code":"EUR","value":5},"tax_total":{"currency_code":"EUR","value":0}}}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-brightjeans');
            element.innerHTML = '';
            element.innerHTML = '<h3>Danke für die Bezahlung!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-brightjeans');
    }
    initPayPalButton();