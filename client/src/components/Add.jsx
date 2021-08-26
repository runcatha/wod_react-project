import Carousel from 'react-bootstrap/Carousel'

function Add() {

  return (
    <>
      <div className='add-column'>
        <img id='crossfit-logo'
          src='https://i.imgur.com/mwjk7X0.png?1'
          alt='CrossFit' />

        {/* Crossfit carousel starts here */}
        <Carousel id='crossfit-sponsors'>
          <Carousel.Item interval={5000}>
            <a id='fitaid-logo' href='https://www.lifeaidbevco.com/fitaid-case?gclid=CjwKCAjw95yJBhAgEiwAmRrutPU0S_ja5TEOzV6MP-RZ_st_uMzbnQ55AeS5FPcJNXR-ocjIe3ioMxoCOtEQAvD_BwE'>
              <img
                id='cs-one'
                src='https://i.imgur.com/6WJ38vB.jpg?1'
                alt='fitaid' />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a id='rogue' href='https://www.roguefitness.com/rx-custom-jump-ropes?gclid=CjwKCAjw95yJBhAgEiwAmRrutJxmcjaf1kM0vqaZAz3i9h8FfJq_Tqb4dc1HZhQdh8lqL1GAroyO8hoC0oIQAvD_BwE'>
              <img
                id='cs-two'
                src='https://i.imgur.com/aK0VQn6.jpg?1'
                alt='Rogue' />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a id='no bull' href='https://www.nobullproject.com/?g_network=g&g_adid=411502383056&g_keyword=no%20bull&g_campaign=Search+-+Brand+-+US+-+SP+%28tCPA+5%29+%28Conv%29&g_adtype=search&g_adgroupid=96501972864&g_keywordid=kwd-301942469657&g_acctid=171-841-5275&g_campaignid=8898144465&utm_campaign=Brand+-+US+-+PS&utm_medium=ppc&utm_term=no%20bull&utm_source=adwords&hsa_ver=3&hsa_src=g&hsa_tgt=kwd-301942469657&hsa_kw=no%20bull&hsa_net=adwords&hsa_mt=e&hsa_grp=96501972864&hsa_ad=411502383056&hsa_cam=8898144465&hsa_acc=1718415275&gclid=CjwKCAjw95yJBhAgEiwAmRrutGWkHo_U1Iu8w4-JUBQPTQl4w-1M1dToV0mqZt7s2QG3fs2byLiE4RoCBNwQAvD_BwE'>
              <img
                id="cs-three"
                src="https://i.imgur.com/Kgwx8la.jpg?1"
                alt="Rx Jump rope"
              />
            </a>
          </Carousel.Item>
        </Carousel>
        {/* Crossfit carousel ends here */}

        <img id='GA-logo'
          src='https://i.imgur.com/pDlzvGG.png?1'
          alt='GA'
        />

        {/* Tech carousel starts here */}
        <Carousel id='tech-sponsors'>
          <Carousel.Item interval={5000}>
            <a id='ctci' href='https://generalassemb.ly/'>
              <img
                id='add-one'
                src='https://i.imgur.com/TNOG8PJ.jpg?1'
                alt='Cracking the Coding Interview' />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a id='ejs' href='https://eloquentjavascript.net/'>
              <img
                id='add-two'
                src='https://i.imgur.com/DaKaP89.jpg?1'
                alt='Eloquent JavaScript' />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a id='Apple' href='https://www.techseries.dev/'>
              <img
                id='add-two'
                src='https://i.imgur.com/8dQvmfX.png?1'
                alt='Apple' />
            </a>
          </Carousel.Item>
        </Carousel>
        {/* Tech carousel starts here */}
        {/* <img id='No-Bull'
          src='https://i.imgur.com/z4M91ta.jpg'
          alt='No-Bull'
        /> */}
      </div>
    </>
  )
}

export default Add