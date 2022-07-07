import React from 'react'
import "./showprofile.css"

const ShowProfile = () => {


    // const btn = document.querySelector('.show_search_btn');
    // const search_pannel = document.querySelector('.show_search_pannel');
    // const search_pannel_wid = getComputedStyle(search_pannel);



    // btn.addEventListener('click', () => {
    //   if (search_pannel_wid.width === "30px") {
    //     console.log(search_pannel_wid.width)
    //     search_pannel.style.width = "300px";
    //   } else if (search_pannel_wid.width === "300px") {
    //     console.log(search_pannel_wid.width)
    //     search_pannel.style.width = "30px";
    //   }
    //   else {
    //     console.log(search_pannel_wid.width)
    //   }
    // })
  // const burger = document.querySelector(".show_menu_burger");
  // const menu = document.querySelector('.show_menu_active');


  // burger.addEventListener('click', () => {
  //   console.log(menu.className);
  //   menu.classList.toggle('show_menu')
  // })





  return (
    <div>
      <div class="show_container">
        <div class="show_nav">
          <h1 class="show_name">Dev.Ex</h1>
          <i class="fa-solid fa-bars show_menu_burger">
          </i>
          <div class="show_menu_active">
            <a href="#">Photos</a>
            <a href="#">Video</a>
            <a href="#">Projects</a>
            <a href="#">Update Profile</a>
            <a href="#">Log Out</a>
          </div>
          <div class="show_search_pannel">
            <input type="text" name="search" id="search" placeholder="search" />
            <button class="show_search_btn" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div class="show_main_sec">
          <div class="show_name_text">
            <h1>I'm Abhishek</h1>
            <div class="show_changing_text">
              <h5 class="show_text_change"></h5>
            </div>
          </div>
          <div class="show_intro_para">
            <div class="show_intro">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
                voluptas veniam, numquam facere perspiciatis atque consectetur qui
                vero voluptates placeat porro esse.
              </p>
              <p>
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati corporis ad dicta asperiores,
                ea ducimus!
              </p>
            </div>
            <div class="show_info">
              <pre>
                Job-Profile : Influencer,Programmer,Developer
                Experience  : 3 Year
                Email Id    : magicine.abhishek@gmail.com
                Projects    : 300+
                City        : Lucknow
                Country     : India
              </pre>
            </div>
            <div class="show_slide_content">
              <button class="show_back_btn" ><i class="fa-solid fa-angle-left"></i></button>
              <button class="show_forward_btn"> <i class="fa-solid fa-angle-right"></i></button>
            </div>
          </div>
          <div class="show_image_sec">
          </div>
        </div>
      </div>
      <div class="show_navigator_sec">
        <div class="show_social_follow">
          <h5>Follow me</h5>
          <div class="show_social_icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div class="show_live_stats">
          <div class="show_follow_stat">
            <div class="show_insta_follow">
              <h5>Instagram</h5>
              <h1>5K</h1>
            </div>
            <hr />
            <div class="show_portfolio_follow">
              <h5>Porfolio</h5>
              <h1>1.5K</h1>
            </div>
          </div>
        </div>
        <div class="show_profile_media">
          <div class="show_upload_images">
            <div class="show_btn_change_image">
              <button><i class="fa-solid fa-angle-left"></i></button>
              <button> <i class="fa-solid fa-angle-right"></i></button>
            </div>
            <div class="show_images_gellary">
              <img class="show_media_images" src="https://cdn.onebauer.media/one/empire-images/reviews_films/59e8bf7af86876d4054b98a6/Chris%20Hemsworth%20Thor%20Ragnarok.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill" alt="" />
              <img class="show_media_images" src="https://images.firstpost.com/wp-content/uploads/2019/04/thor380.jpg" alt="" />
              <img class="show_media_images" src="https://images.firstpost.com/wp-content/uploads/2019/04/thor380.jpg" alt="" />
              <img class="show_media_images" src="https://lumiere-a.akamaihd.net/v1/images/h_thorragnarok_mobile_19888_746476a2.jpeg?region=0,0,640,480" alt="" />
              <img class="show_media_images" src="https://cdn.vox-cdn.com/thumbor/HME6YC8484Vf48wW0vz9AGRNa3c=/0x0:4200x2600/1200x0/filters:focal(0x0:4200x2600):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9490719/thor_big.jpg" alt="" />
              <img class="show_media_images" src="https://images.immediate.co.uk/production/volatile/sites/3/2022/04/Thor-love-and-thunder-d230b48.jpg?quality=90&resize=620,414" alt="" />
              <img class="show_media_images" src="https://www.tradeinn.com/f/13820/138203770/tamashi-nations-the-avengers-thor-figure-16-cm.jpg" alt="" />
            </div>
            <div class="show_modal_view">
              <div class="show_modal_img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowProfile;