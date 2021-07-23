import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div class="row footer-main">
                <div class="col-six tab-full left footer-desc">
                    <div class="footer-logo"></div>
                    HRFO - Human Rights Fighters NPO là một tổ chức phi lợi nhuận được
                    thành lập vào ngày 24 tháng 6 năm 2020 bởi những bạn trẻ Việt Nam đầy
                    nhiệt huyết, đam mê và có sự quan tâm đặc biệt về vấn đề nhân quyền
                    trên khắp thế giới.
                    </div>

                    <div class="col-six tab-full right footer-subscribe">
                    <h4>Get Notified</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea
                        modi sequi doloribus cupiditate quod eos, molestias atque commodi
                        cumque inventore debitis, voluptas aut? Quisquam neque quos corrupti
                        laudantium reiciendis.
                    </p>

                    <div class="subscribe-form">
                        <form id="mc-form" class="group" novalidate="true">
                        <input
                            type="email"
                            value=""
                            name="EMAIL"
                            class="email"
                            id="mc-email"
                            placeholder="Email Address"
                            required=""
                        />
                        <input type="submit" name="subscribe" value="Subscribe" />
                        <label for="mc-email" class="subscribe-message"></label>
                        </form>
                    </div>
                </div>
            </div>

            <div class="row footer-bottom">
                <div class="col-twelve">
                    <div class="copyright">
                        <span>© Copyright HRFO 2021</span>
                        <span
                        >Web Page Made By
                        HRFO Web Dev Team
                        </span>
                    </div>

                    <div class="go-top">
                        <a class="smoothscroll" title="Back to Top" href="#top">
                            <i class="icon-arrow-up" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
