import React from 'react'
import { Helmet } from 'react-helmet'

const ServicesPage = () => (
  <div>
    <h1>Our Services</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      adipisci, voluptatum, nisi velit praesentium error quia explicabo voluptas
      ad recusandae enim. Recusandae sequi non vel voluptas. Labore omnis
      provident ex, perferendis esse, voluptate atque alias officiis dolor
      eligendi itaque qui?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      adipisci, voluptatum, nisi velit praesentium error quia explicabo voluptas
      ad recusandae enim. Recusandae sequi non vel voluptas. Labore omnis
      provident ex, perferendis esse, voluptate atque alias officiis dolor
      eligendi itaque qui?
    </p>
    <Helmet>
      <script>
        {`
            console.log('Test');
          `}
      </script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
console.log('check:', document.location.protocol);
        `,
        }}
      />
    </Helmet>
  </div>
)

export default ServicesPage
