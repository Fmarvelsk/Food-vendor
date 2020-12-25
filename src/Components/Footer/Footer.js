import React from 'react'
import Google from '../../Image/googleplayfooter.png'
const Footer = () => {
  const FooterName = [{
   title:"Popular Dishes",
   page:[
     {
       link:'Order African soups',
       url:'/'
      },
      {
        link: 'Order Stew',
        url:'/'
       },
       {
        link:'Order Small chops',
        url:'/'
       },
      {
          link : 'Order assorted',
          url : '/'
      },{
        link : 'Order Meatpies',
        url : '/' 
      }  ]
  },
{
  title: "Orders for special occassion",
  page : [{link :'Order for the family', url:'/'}, {link:'Sunday specials', url:'/'}, {link:'Birthdays', url:'/'},{ link:'Fuel for meetings', url:'/'}]
},
{
  title : "About us ",
  page : [{
    link :'About us', 
    url:'/'},
{
  link : 'Price Promise',
  url:'/'
},
{
  link : 'FAQs',
  url : '/'
}
    ,{
      link: 'Browse Takeaways', url:'/'},
      {
        link: 'Redeem a gift card',
        url : '/'
      },
      {
        link: 'Privacy Policy', url:'/'},
        { link : 'Terms and Conditions',
        url : '/'

        }, {
          link: 'Cookie Policy', url:'/'},
          {
            link: 'Become a courier Courier portal',
          url:'/'} ]
},
{
  title : "Delivery locations",
  page:[ {
    link:'Dublin', url:'/'
  }, {
    link: 'Cork',
    url:'/' },
    {
    link:'Kerry',
      url:'/'}]
}

]
    return (
     
        <footer className="page-footer elegant-color">
  <div className="container text-center text-md-left pt-4 pt-md-5">
    <div className="row mt-1 mt-md-0 mb-4 mb-md-0 ">

      {FooterName.map((footer, i) => 
    <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 wd" key={i}>
              <h5>{footer.title}</h5>
        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>
        {footer.page.map((d, n) => 
<div className="foot-desc" key={n}>
<a href={d.url}><p className=" mb-3">{d.link}

</p>
</a>
</div>
        )}
      </div>


)}
      </div>
  
      <div className="row">
        <div className="col-md-6 col-lg-6 ">
    <p className="platform">We have Over 100 restuarants and deliveries on</p> <p className="platform"> our plartform
sign up today to  partner with  us </p>
<div className="footer-signup-btn mb-5">
  <input className="btn-cls" type="button" value="Sign up"/>
</div>
</div>
<div className="col-md-6 col-lg-6">
<a href="/" className="ml-3"><img src="https://belladivafitness.com/wp-content/uploads/2019/05/Download-on-the-app-store-button-01.svg" alt="svg" width="30%"/></a>
<a href = "/" className="ml-3"><img src={Google} width="30%" alt="store"/></a>
</div>

  </div>
 
  </div>
  <div className="footer-copyright text-center mt-5 py-3"> Vendr. © 2020
    </div>
  </footer>
    )
}
export default Footer 