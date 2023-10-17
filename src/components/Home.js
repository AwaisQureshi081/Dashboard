'use client'
import React from 'react'
import {BsCardList,BsWallet2,BsSearch,BsBag,BsCurrencyDollar} from 'react-icons/bs'
// import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
//   ResponsiveContainer,LineChart, Line} from 'recharts';
  import EarningCharts from './EarningCharts';
  import {ProductCharts} from './ProductCharts';
  
  

export const Home = () => {
  const data = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], // Example month names
    earnings: [15000, 10000, 20000, 18000, 19000,5000,19000,21000,20000,18000,17000,18000] // Example earnings data
  };
  

  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  return (
      <main className='main-container'>
          <div className='main-cards'>
             <div className='card'>
             <BsCurrencyDollar style={{padding:'5px'}} className='symbol-doller'/>
              <div className='card-inner'>
                  <span className='topic'>Earning</span>
                  <span className='amount'>$198k</span>
                  <span className='growth'><span className='growth-value-up'>↑ 37.8% </span>this month</span>
                </div>
              
              </div>
              <div className='card'>
              <BsCardList style={{padding:'5px'}} className='symbol-book'/>
              <div className='card-inner'>
              <span className='topic'>Order</span>
                  <span className='amount'>$2.4k</span>
                  <span className='growth'><span className='growth-value-down'>↓ 2% </span>this month</span>
                </div>
              </div>

              <div className='card'>
              <BsWallet2 style={{padding:'5px'}} className='symbol-wallet'/>
              <div className='card-inner'>
                  <span className='topic'>Balance</span>
                  <span className='amount'>$2.4k</span>
                 <span className='growth'><span className='growth-value-down'>↓ 2% </span>this month</span>
                </div>
              </div>
              <div className='card'>
              <BsBag style={{padding:'5px'}} className='symbol-bag'/>
              <div className='card-inner'>
              <span className='topic'>Total Sales</span>
                  <span className='amount'>$89k</span>
                 <span className='growth'><span className='growth-value-up'>↑ 11% </span>this week</span>
                </div>
              </div>
          </div>

    <div className='chart-container'>
       <div className='chart-heading'>
       <div className='chart-drop'>
              <select>
                <option >Quartely</option>
              </select>
            </div>   
        <div className='bar-heading'>
           <h3 style={{marginBottom:'initial',display:'inline'}}>OverView</h3>
           <h6 style={{color:'GrayText',marginTop:'10px'}}>Monthly Earnings</h6> 
           </div>    
           
          <div className='chart'>
           <EarningCharts data={data}  />
          </div>
       </div>

        <div className="circle-chart">
            <h3 style={{marginBottom:'initial'}}>Customers</h3>
            <h6 style={{color:'GrayText',marginTop:'10px'}}>Customers that buy products</h6>
           <div className='circle-chart-inner'>
            <ProductCharts />
           </div>
        </div>
  </div>

       

      <div className='table-wrapper'>
        <div className='title-row'>
          <h2 className='table-title'>Product Sell</h2>
          <div className='search-box'>
            <BsSearch className='icon'/>
            <input type='text' placeholder='Search'/>&nbsp;
            <select>
              <option>Last 30 days</option>
            </select>
            </div>
            </div>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Total Sales</th>
                </tr>
                
              </thead>

              <tbody>
                <tr>
                  <td className='image-cell'><img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLAlTrOHLYayDU0Gdwr4RJEhesavZLlbIrQ&usqp=CAU' style={{width:'50px', height:'50px'}}/>
                 <div style={{display:'inline'}}><h3 style={{display:'inline'}}>Abstract 3D</h3 ><br/><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div></td>
                  <td >32 in stock</td>
                  <td className='right-data'>$45.99</td>
                  <td className='right-data'>20</td>
                </tr>
                <tr>
                <td className='image-cell'><img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mC3lIMugcSU6qz8ApuvbpHInhxcY72lAzA&usqp=CAU' style={{width:'50px', height:'50px'}}/>
                 <div style={{display:'inline'}}><h3 style={{display:'inline'}}>Sarphens Illustration</h3 ><br/><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div></td>
                  <td >32 in stock</td>
                  <td className='right-data'>$45.99</td>
                  <td className='right-data'>20</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      </main>
  )
}
