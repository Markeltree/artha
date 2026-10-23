import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: 'Rs 50K',
    unit: 'Room',
    features: ['Design Consultation', '2D Layout Plan', 'Colour & Material Palette', 'Shopping List', '1 Revision']
  },
  {
    name: 'Standard',
    price: 'Rs 90K',
    unit: 'Room',
    features: ['Everything in Basic', '3D Renders', 'Furniture Selection', 'Site Visit', '3 Revisions']
  },
  {
    name: 'Advanced',
    price: 'Rs 150K',
    unit: 'Room',
    features: ['Everything in Standard', 'Custom Furniture Design', 'Lighting Plan', 'Contractor Coordination', 'Unlimited Revisions']
  },
  {
    name: 'Premium',
    price: 'Custom',
    unit: 'Project',
    features: ['Full Turnkey Execution', 'Dedicated Project Manager', 'Procurement & Installation', 'Final Styling', '1 Year After-Care']
  }
];

export default () => (
  <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

        <div className='col-12 text-center'>
          <div className='subheading'>Our Pricing</div>
          <div className='heading'>Simple, Transparent Packages</div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='content'>
                Every project is different, so we keep our packages flexible. 
                Choose a per-room design package, or let us handle your entire 
                home or office from first sketch to final styling. 
                All prices are design fees; furniture and construction are quoted separately.
              </p>
            </div>
          </div>
        </div>

        {plans.map(plan => (
          <div className='col-md-3' key={plan.name}>
            <div className='pricelist'>
              <div className="heading">{plan.name}</div>
              <div className="bigprice"><span className='text-gradient'>{plan.price}</span> <small>{plan.unit}</small></div>
              <ul className="list">
                {plan.features.map(f => (
                  <li key={f}><i className="fa fa-check"></i> {f}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        </div>
    </section>
  
);
