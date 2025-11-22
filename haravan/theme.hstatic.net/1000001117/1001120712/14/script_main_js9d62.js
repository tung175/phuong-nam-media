var urlArray = ['thiet-ke-website-doanh-nghiep','thiet-ke-website-my-pham','thiet-ke-website-dien-may','thiet-ke-website-thoi-trang','thiet-ke-website-me-va-be', 'thiet-ke-website-noi-that','thiet-ke-website-dong-ho','thiet-ke-website-dien-thoai', 'thiet-ke-website-sach', 'thiet-ke-website-trang-suc'],
		urlHandle = window.location.pathname.split('/'),
		urlSegment = urlHandle.reverse()[0];

function formatMoney(number,format) {
	return number
		.toFixed(0) // always two decimal digits
		.replace(",", ".") // replace decimal point character with ,
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "" + format // use , as a separator
};
/*==========================================*/
var htmlprev = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"> <g> <g> <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8 c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712 L143.492,221.863z"/> </g> </g> </svg>';
var htmlnext = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"> <g> <g> <path d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734 L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8 C342.889,227.058,342.889,216.255,336.226,209.591z"/> </g> </g> </svg>';
var htmlarrow_prev = '<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12.5H5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19.5L5 12.5L12 5.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var htmlarrow_next = '<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5H19" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19.5L19 12.5L12 5.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg>';


var HRV = {
	init: function() {
		var that = this;
		that.initViews();
		that.scriptMain.init();
	},
	initViews: function() {
		var view = window.template,	that = this;
		switch (view) {
			//case 'index':
			case 'index.homepage-hn':
			case 'index.homepage-v2':
			case 'index.homepage-icon':
			case 'index.homepage-hpbd-2024':
			case 'index.homepage-hpbd-2025':
			case 'index.home-banner':
			case 'index.home-ecommerce-1':
			case 'index.home-ecommerce-2':
				HRV.Homepage.init();
				break;
			/*case 'index.homepage-2025':
				HRV.HomepageNew.init();
				break;*/
			case 'collection':
				break;
			case 'search':
				break;
			case 'product':
				HRV.HRSocial.scriptTemplates.tooltipTemplate();
				break;
			case 'blog':
				that.scriptBlog.init();
				break;
			case 'article':				
				that.scriptArticle.init();
				break;		
			case 'page':
				break;
			case 'page.contact-v1.4':
				that.scriptAboutUs.init();
				break;
			case 'page.contact-v1.5':
				that.scriptAboutUs2.init();
				break;
			case 'page.inventory-v1.0':
				that.scriptInventory();
				break;	
			case 'page.ship':
			case 'page.ship_v1.1':
			case 'page.ship_v2':
			case 'page.ship_v3':
			case 'page.ship_v3.1':
			case 'page.ship_v3.2':
			case 'page.ship_v3.3':
				that.PageShip.init();
				break;
			case 'page.ship-features':	
			case 'page.ship-features-v1':
				that.PageShip.init();
				that.PageShip.fixedSidebarShipFeatures();
				break;		
			case 'page.ship-pricing':
			case 'page.ship-pricing_v1.1':
			case 'page.ship-pricing_v1.2':
			case 'page.ship-pricing_v2':
			case 'page.ship-pricing_v2.1':
			case 'page.ship-pricing_v2.2':
			case 'page.ship-pricing_v2.3':
			case 'page.ship-pricing_v2.4':
			case 'page.ship-pricing_v2.5':
			case 'page.ship-pricing_v2.5.1':
			case 'page.ship-pricing_v2.5.2':
			case 'page.ship-pricing_v2.5.3':
			case 'page.ship-guides':
				that.PageShip.init();	
				break;		
			case 'page.referral':
			case 'page.referral-pricing':
				that.Referral.init();
				break;
			case 'page.onboarding-pricing':
			case 'page.referral-fea':
				that.Onboarding.init();
				break;
			case 'page.hrvshop_v1.0':
				HRV.All.sliderCustomerLogo();
				HRV.All.sliderCustomerQuote();
				break;
			case 'page.hrsocial-facebook':
			case 'page.hrsocial-facebook-v1':
				case 'page.hrsocial-facebook-v1.1':
				case 'page.hrsocial-facebook-v2':
				that.HRSocial.scriptFacebook.init();
				break;
			case 'page.hrsocial-features':
				that.HRSocial.scriptFeatures.init();
				break;
			case 'page.hrsocial-templates':
				that.HRSocial.scriptTemplates.init();
				break;
			case 'page.hrloyalty':
				that.HRLoyalty.init();
				break;
			case 'page.hararetail':		
				HRV.HRRetail.init();
				break;
			case 'page.mkt-haravan':
				that.HRMarketing.init();
				break;
			case 'page.manage-payment_v1.1':		
				HRV.Payment.init();
				break;
			case 'page.tragop_v1.1':		
				HRV.All.sliderCustomerLogo();
				HRV.All.sliderCustomerQuote();
				break;
			case 'customers[order]':
				break;
			case 'cart':
				break;

			default:
		}
	},
	scriptMain:{
		init: function() {
			var that = this;
			that.fixedMainHeader();
			that.openMenuMobile();
			that.closeMenuMobile();
			that.toggleMenuMobile();
			that.hoverDropdownMainMenu();
			that.hoverDropdownBackground();
			that.toggleFooter();
			that.toggleFooterPage();
			that.widthMenu();
			that.clickMenu();
		},
		fixedMainHeader: function(){
			var $parentHeader = $('.mainHeader-hrv--height');
			var parentHeight = $parentHeader.find('.mainHeader-hrv').outerHeight();
			$parentHeader.css('min-height', parentHeight);
			var resizeTimer = false,
					resizeWindow = $(window).prop("innerWidth");

			$(window).on("resize", function() {
				if (resizeTimer) {	clearTimeout(resizeTimer)	}
				resizeTimer = setTimeout(function() {
					var newWidth = $(window).prop("innerWidth");
					if (resizeWindow != newWidth) {
						if($('body').hasClass('overflow-hidden')) {
							$( "#showmenu-mobile" ).first().trigger( "click" );
						}
						$('.mainHeader-hrv').removeClass("nav-sticky");

						$parentHeader.css('min-height', '');
						parentHeight = $parentHeader.find('.mainHeader-hrv').outerHeight();
						$parentHeader.css('min-height', parentHeight);
						resizeWindow = newWidth
					}
				}, 200)
			});
			setTimeout(function() {
				$parentHeader.css('min-height', '');
				parentHeight = $parentHeader.find('.mainHeader-hrv').outerHeight();
				$parentHeader.css('min-height', parentHeight);
				var stickyNow = false,
						currentState = false;
				$(window).scroll(function() {
					var curWinTop = $(window).scrollTop();
					if (curWinTop > 400) {
						$('.mainHeader-hrv').addClass("nav-sticky");	
						$parentHeader.addClass("hSticky");				
						currentState = true
					}
					else {
						$('.mainHeader-hrv').removeClass('nav-sticky').removeClass('nofade');
						$parentHeader.removeClass("hSticky");	
						currentState = false
					}
					if (currentState != stickyNow) {	stickyNow = currentState }
				})
			}, 300)
		},
		openMenuMobile: function(){
			setTimeout(function() {
				$(document).on('click','#showmenu-mobile', function(e){
					e.preventDefault();
					if ($('#showmenu-mobile').hasClass("active-icon")){
						$(this).removeClass("active-icon");
						$(".mainHeader-hrv").removeClass("fixed-nav").addClass('nofade');
						$("#navHeader").removeClass("show-menu");
						$('.dropdown-wrapper').slideUp();
						$('li.has-dropdown').removeClass('open-menu') ;
						$('li.item-dropdown').removeClass('open-submenu');
						$('li.item-dropdown2').removeClass('open-submenu');
						$('li.item-dropdown .infoList-submenu').slideUp();
						$('li.item-dropdown2 .infoList-submenu2').slideUp();
						$('.overlay-mobile').removeClass("show-rgb");
						$('body').removeClass('overflow-hidden');
					}
					else{
						$("#showmenu-mobile").addClass("active-icon");
						$(".mainHeader-hrv").addClass("fixed-nav");				
						$('.overlay-mobile').addClass("show-rgb");
						setTimeout(function() {	$("#navHeader").addClass("show-menu");},150)
						$('body').addClass('overflow-hidden');
					}

				});
			}, 350)
		},
		closeMenuMobile: function(){
			$('body').on('touchstart', '.overlay-mobile', function(e) {
				$("#showmenu-mobile").removeClass("active-icon");
				$(".mainHeader-hrv").removeClass("fixed-nav").addClass('nofade');
				$("#navHeader").removeClass("show-menu");
				$('.overlay-mobile').removeClass("show-rgb");
				$('body').removeClass('overflow-hidden');
			});
		},
		toggleMenuMobile:function(){
			jQuery('.has-dropdown>.menu-link').click(function(e) {
				e.preventDefault();
				if (jQuery(window).width() <= 991) {	
					if ($(this).parents('li.has-dropdown').hasClass('open-menu')) {
						$('li.item-dropdown').removeClass('open-submenu');
						$('li.item-dropdown .infoList-submenu').slideUp();
						$(this).parents('li.has-dropdown').removeClass('open-menu');
						$(this).parents('li.has-dropdown').first().find('.dropdown-wrapper').slideUp();
					}
					else {
						$('.dropdown-wrapper').slideUp();
						$('li.has-dropdown').removeClass('open-menu') ;

						$('li.item-dropdown').removeClass('open-submenu');
						$('li.item-dropdown .infoList-submenu').slideUp();
						$(this).parents('li.has-dropdown').addClass('open-menu');
						$(this).parents('li.has-dropdown').first().find('.dropdown-wrapper').stop().slideDown();
					}
				}
			});
			jQuery('.item-dropdown>a').click(function(e){
				e.preventDefault();
				if (jQuery(window).width() <= 991) {
					e.preventDefault();
					$(this).parent('.item-dropdown').toggleClass('open-submenu');
					$(this).parent('.item-dropdown').find('.infoList-submenu').stop().slideToggle(250);
				}
				else{
					$(this).blur();
				}
			});
			jQuery('.item-dropdown2>a').click(function(e){
				e.preventDefault();
				if (jQuery(window).width() <= 991) {
					e.preventDefault();
					$(this).parent('.item-dropdown2').toggleClass('open-submenu');
					$(this).parent('.item-dropdown2').find('.infoList-submenu2').stop().slideToggle(250);
				}
				else{
					$(this).blur();
				}
			});
		},
		hoverDropdownMainMenu: function(){
			if (jQuery(window).width() > 991) {
				var navListWidth = $('.dropdown-width--hover .infoList-submenu').width();
				var navListWidthX2 = navListWidth + navListWidth;
				var navListWidthX3 = navListWidth + navListWidth + navListWidth;

				/*$('.mainmenu-hrv .has-dropdown').hover(function(event){
					$('.mainmenu-hrv .has-dropdown').removeClass('has-hover');
					$(this).addClass('has-hover');
				}, function() {
					let name = event.target.className;
					if(name.indexOf('menu-link') > -1){
						console.log('1' + name);
					}else{
						console.log('2' + name)
						setTimeout(function(){ 
							$('.mainmenu-hrv .has-dropdown').removeClass('has-hover');
						}, 300);
					}
				})*/
				
				
				$(".item-dropdown").hover(function() {
					$(this).addClass('active');
					$(this).parents('.dropdown-width--hover').addClass('has-active');
					$(this).parents('.dropdown-width--hover').find('.infoList-submenu').css("width", navListWidth);
					var navListMinHeight = parseInt($(this).parents('.dropdown-width--hover').find('.item-dropdown.active .dropdown-right').outerHeight());
					$(this).parents('.dropdown-width--hover').find('.dropdown-list').css("width", navListWidthX2);
					$(this).parents('.dropdown-width--hover').find('.infoList-submenu-height').css("min-height", navListMinHeight);
					$(this).parents('.infoList-submenu').find('.item-dropdown.active .dropdown-right').css("min-height", "100%");

					if($(this).parents('.dropdown-width--hover').find('.dropdown-list').width() == navListWidthX2 ){
						$(this).parents('.infoList-submenu').find('.item-dropdown').addClass('fadeNo');	
					}
					else{
						if($(this).hasClass('active')){	
							$(this).addClass('fadeAni');
						}
						$(this).parents('.infoList-submenu').find('.item-dropdown:not(.active)').addClass('fadeNo');	
					}
				}, function() {
					$(this).removeClass('active').removeClass('fadeAni');
					$(this).parents('.infoList-submenu').find('.item-dropdown').removeClass('fadeNo');
					$(this).parents('.dropdown-width--hover').removeClass('has-active');
					$(this).parents('.dropdown-width--hover').find('.dropdown-list').css("width","100%");
					$(this).parents('.dropdown-width--hover').find('.infoList-submenu-height').css("min-height", "100px");
					$(this).parents('.dropdown-width--hover').find('.infoList-submenu').css("width", navListWidth);
				});
				$(".item-dropdown2").hover(function() {
					$(this).addClass('active');
					$(this).parent().parent().addClass('has-border');
					$(this).parents('.dropdown-width--hover').addClass('has-active');	
					var navListMinHeight2 = parseInt($(this).parents('.dropdown-width--hover').find('.item-dropdown2.active .dropdown-right').outerHeight());
					$(this).parents('.dropdown-width--hover').find('.dropdown-list').css("width", navListWidthX3);
					$(this).parents('.dropdown-width--hover').find('.infoList-submenu-height').css("min-height", navListMinHeight2);
					$(this).parents('.infoList-submenu2').find('.item-dropdown2.active .dropdown-right').css("min-height", "100%");
					if($(this).parent('.dropdown-width--hover').find('.dropdown-list').width() == navListWidthX3 ){
						$(this).parents('.infoList-submenu2').find('.item-dropdown2').addClass('fadeNo');	
					}
					else{
						if($(this).hasClass('active')){	
							$(this).addClass('fadeAni');
						}
						$(this).parents('.infoList-submenu2').find('.item-dropdown2:not(.active)').addClass('fadeNo');	
					}


				}, function() {
					$(this).removeClass('active').removeClass('fadeAni');
					$(this).parent().parent().removeClass('has-border');
					$(this).parents('.infoList-submenu2').find('.item-dropdown2').removeClass('fadeNo');
					$(this).parents('.dropdown-width--hover').find('.dropdown-list').css("width",navListWidthX2);
					//$(this).parents('.dropdown-width--hover').find('.infoList-submenu2').css("width", navListWidthX2);
					//$(this).parents('.dropdown-width--hover').find('.infoList-submenu').css("width", navListWidthX3);
				});
			}

		},
		hoverDropdownBackground: function() {
			$(".js-hover").hover(function() {
				$(this).parents('.js-parents').addClass('hover-bg');
			}, function() {
				$(this).parents('.js-parents').removeClass('hover-bg');
			});
		},
		toggleFooter: function() {		
			jQuery('.widget-footer-mb .togged-footer').on('click', function(e){
				e.preventDefault();
				if (jQuery(window).width() <= 767) {
					jQuery(this).toggleClass('opened').parent().find('.footer-collapse').stop().slideToggle('');
				}
			});
		},
		toggleFooterPage: function() {		
			jQuery('.footer-page .widget-footer-mb .togged-footer').on('click', function(e){
				e.preventDefault();
				if (jQuery(window).width() <= 991) {
					jQuery(this).toggleClass('opened').parent().find('.footer-collapse').stop().slideToggle('');
				}
			});
		},
		widthMenu: function(){
			var w_container = $('.menuList-submain .container').width();
			var w_menu = ($(window).width() - w_container)/2;
			$('.menuList-submain .menu-bottom,.menuList-submain  .col-bg').attr('style','--width:'+ w_menu + 'px;--bd:-'+ w_menu + 'px');
		},
		clickMenu: function(){
			function clickmenu() {
				if ($(window).width() < 992) {
					// Gỡ sự kiện cũ trước khi gắn lại để tránh chồng sự kiện
					$('.mainHeader-hrv-new .navHeader .menu-item.has-child .menu-link')
						.off('click')
						.on('click', function (e) {
						e.preventDefault(); // Ngăn mặc định nếu là <a>
						var $this = $(this);
						var $submenu = $this.parent().find('.menuList-submain');

						if ($this.hasClass('active')) {
							$this.removeClass('active');
							$submenu.stop().slideUp();
						} else {
							$this.addClass('active');
							$submenu.stop().slideDown();
						}
					});

					$('.mainHeader-hrv-new .submain-link .title-link')
						.off('click')
						.on('click', function (e) {
						e.preventDefault();
						var $this = $(this);
						var $linkList = $this.parent().find('.link-list');

						$this.toggleClass('active');
						if ($this.hasClass('active')) {
							$linkList.stop().slideDown();
						} else {
							$linkList.stop().slideUp();
						}
					});
				} else {
					// Gỡ các sự kiện khi chuyển về desktop
					$('.mainHeader-hrv-new .navHeader .menu-item.has-child .menu-link').off('click');
					$('.mainHeader-hrv-new .submain-link .title-link').off('click');

					// Reset style/menu nếu cần
					$('.mainHeader-hrv-new .menuList-submain, .link-list').removeAttr('style');
					$('.mainHeader-hrv-new .menu-link, .title-link').removeClass('active');
				}
			}
			clickmenu();
			$(window).on('resize', function () {
				clickmenu();
			});
		},
	},
	scriptBlog:{
		init: function() {
			var that = this;
			that.fixedSidebarBlog();
		},
		fixedSidebarBlog: function(){
			if($(window).width() > 991){
				if($('.sidebar-fixed-blogs').length > 0){
					var el = $('.sidebar-fixed-blogs');
					var blog_info = $('.blogs-content-left');
					var stickyTop = (el.offset().top) - 60;// returns number
					var stickyLeft = (el.offset().left) - 0;
					var stickyWidth = (el.width()) + 0;				
					var height_info =  blog_info.height();
					var sidebarHeight =($('.sidebar-blog').height()) + 100;
					$(window).scroll(function (){
						var windowTop = $(window).scrollTop(); // returns number
						var footerTop = ($('.mainFooter-hrv').offset().top) - 100; // returns number
						var stickyHeight =(el.height()) + 0;
						var limit = footerTop - stickyHeight ;

						if ( height_info  <=  sidebarHeight ) {		
						}else{
							if(stickyTop < windowTop){
								el.css({
									position:'fixed',
									top:60,
									width: stickyWidth,
									/*left: stickyLeft,*/
								})	
							}
							else	{
								el.css({
									position:'static',
									top:0,
									width: stickyWidth, 
									/*left: stickyLeft,*/
								})
							}
							if (limit < windowTop) {
								var diff = limit - windowTop;
								el.css({ top: diff });
							}
						}
					});
				}
			}
		}
	},
	scriptArticle:{
		init: function() {
			var that = this;
			HRV.scriptBlog.fixedSidebarBlog();
		}
	},
	scriptAboutUs:{
		init: function() {
			var that = this;
			that.changeSelectboxOption();
			that.submitFormContact();
			//that.submitFormGoogle();
		},
		changeSelectboxOption: function(){
			$('.helpcenter-form .field-group-select .selectbox-label').on('click', function() {
				$(this).parent().toggleClass('selectbox-opened');
			});
			$('.helpcenter-form .field-group-select .selectbox-option li').on('click', function() {
				$('.helpcenter-form .field-group-select').removeClass('js--error');
				$('.selectbox-option li').removeClass('active');
				$(this).addClass('active');	
				$('.helpcenter-form .field-group-select').find('.selectbox-label').text($(this).text()).attr('data-option',$(this).attr('data-value'));
				$('.helpcenter-form .field-group-select').find('.field-input-wrapper').addClass('js-is-field');
				$(this).parents('.helpcenter-form .field-group-select').find('.field-input-wrapper').removeClass('selectbox-opened');	
			});
		},
		submitFormContact: function() {
			jQuery(document).on("change keyup blur", ".helpcenter-form .field-input", function() {
				var element = $(this).val();	
				var $inputWrapper = $(this).closest('.field-input-wrapper');
				if (element.length > 0 ) {
					$inputWrapper.addClass('js-is-field');
				} else {
					$inputWrapper.removeClass('js-is-field');
				}
			});
			$(document).on('click','.helpcenter-form .btn-contact-form',function(e){
				if($(this).closest('.contact-form')[0].checkValidity() == true){
					e.preventDefault();
					var getVal1 = $(this).parents('form').find('.body-contact');
					var Val1 = getVal1.val();
					if($('.selectbox-label').attr("data-option").length > 0){
						var getVal2 = $(this).parents('form').find('.selectbox-label').attr("data-option");
						var Val2 = getVal2;
						//$('input[name="contact[body]"]').val(Val1+'\n'+ '&#123;&#123;' + Val2 + '&#125;&#125;');
						$('input[name="contact[body]"]').val('Nhu cầu liên hệ: '+Val2+'; Nội dung liên hệ: ' + Val1);
						if(localStorage.getItem('checkSuccess') && localStorage.getItem('checkSuccess') == 1){
							localStorage.setItem('checkSuccess',0);
						}
						$(this).parents('form').submit();
					}
					else{
						$('.helpcenter-form .field-group-select').addClass('js--error');
					}
				}
			});
			if(window.location.search.indexOf('contact_posted=true') > -1){
				if(!localStorage.getItem('checkSuccess') || localStorage.getItem('checkSuccess') == 0){
					$('.helpcenter-form .alert-contact-success').removeClass('hidden');
					localStorage.setItem('checkSuccess',1);
				}else{
				}
			}
		}
	},
	scriptAboutUs2:{
		init: function() {
			var that = this;
			that.submitFormGoogle();
		},
		submitFormGoogle: function() {
			
			function checkEmpty(obj) {
				var name = $(obj).attr("data-valid");

				$("."+name+"-validation").html("");
				$(obj).css("border","");

				if($(obj).val() == "" || $(obj).val() == 'null' || $(obj).val() == null  || $(obj).val() == 'undefined'  || $(obj).val() == undefined) {
					$(obj).css("border","#FF0000 1px solid");
					$("."+name+"-validation").html("Vui lòng điền thông tin tại đây");
					return false;
				}
				return true;
			}
			function checkEmail(obj) {
				var result_ph = true;

				var name = $(obj).attr("data-valid");
				$("."+name+"-validation").html("");
				$(obj).css("border","");

				result_ph = checkEmpty(obj);

				if(!result_ph) {
					$(obj).css("border","#FF0000 1px solid");
					$("."+name+"-validation").html("Vui lòng điền thông tin tại đây");
					return false;
				}

				var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				result_ph = email_regex.test($(obj).val());

				if(!result_ph) {
					$(obj).css("border","#FF0000 1px solid");
					$("."+name+"-validation").html("Địa chỉ Email không hợp lệ");
					return false;
				}

				return result_ph;
			}
			function checkPhone(obj) {
				var result = true;

				var name = $(obj).attr("data-valid");
				$("."+name+"-validation").html("");
				$(obj).css("border","");

				result = checkEmpty(obj);

				if(!result) {
					$(obj).css("border","#FF0000 1px solid");
					$("."+name+"-validation").html("Vui lòng điền thông tin tại đây");
					return false;
				}

				var phone_regex = /(^0[2-9]\d{8}$)|(^01\d{9}$)/;
				result = phone_regex.test($(obj).val());

				if(!result) {
					$(obj).css("border","#FF0000 1px solid");
					$("."+name+"-validation").html("Số điện thoại không hợp lệ");
					return false;
				}

				return result;
			}
			var valid = false;
			function validate(){
				var name = $('#formgetdb #yourname').val();
				var phone = $('#formgetdb #yourphone').val();
				var email = $('#formgetdb #youremail').val();
				var contact = $('#formgetdb #yourcontact').val();

				//debugger;
				if(name != '' && name != null && phone != '' && phone != null && email != '' && email != null && contact != '' && contact != null){
					valid = true;
					valid = valid && checkPhone($("#formgetdb #yourphone"));
					valid = valid && checkEmail($("#formgetdb #youremail"));
				}
				else{
					valid = false;
				}
				if(valid == true){
					//$(".btn_contact_send").removeClass('btn-disabled').attr("disabled",false);
					/*var actCallback = function (response) {
						$(".btn_contact_send").removeClass('btn-disabled').attr("disabled",false);
						$('#re-captcha1').remove();
					};*/
					$(".btn_contact_send").addClass('has-value');
					var response = grecaptcha.getResponse(widget);
					if (!response) {
						//console.log('Chưa tick reCAPTCHA');
						$(".btn_contact_send").addClass('btn-disabled').attr("disabled",true);
					} else {
						//console.log('Đã tick reCAPTCHA');
						$(".btn_contact_send").removeClass('btn-disabled').attr("disabled",false);
					}
				}
				else{
					/*var expCallback = function() {
						$(".btn_contact_send").addClass('btn-disabled').attr("disabled",true);
					};*/
					$(".btn_contact_send").addClass('btn-disabled').attr("disabled",true);
					$(".btn_contact_send").removeClass('has-value');
				}
			}
			jQuery(document).on("change keyup blur", ".field-group .field-input", function() {
				var element = $(this).val();	
				var $inputWrapper = $(this).closest('.field-input-wrapper');
				if (element.length > 0 ) {
					$inputWrapper.addClass('js-is-field');
				} else {
					$inputWrapper.removeClass('js-is-field');
				}
				if($(this).attr('id') == 'yourphone'){
					checkPhone($(this));
				}else if($(this).attr('id') == 'youremail'){
					checkEmail($(this));
				}else{
					checkEmpty($(this));
				}
				validate();
			});
			

			
			$('#formgetdb .btn_contact_send').click(function(e){
				e.preventDefault();
				var that = $(this);
				//debugger;
				if($('#formgetdb #yourname').val() != '' && $('#formgetdb #yourphone').val() != '' && $('#formgetdb #youremail').val() != '' && $('#formgetdb #yourcontact').val() != ''){
					var unindexed_array = that.parents("form").serializeArray();
					var indexed_array = {};
					var url = that.parents("form").attr('action');

					$.map(unindexed_array, function(n, i){
						indexed_array[n['name']] = n['value'];
					});
					debugger;
					$.ajax({
								type: 'POST',
								url: url,
								async : false,
								data: indexed_array,
								dataType: 'json',
								complete: function() {
									setTimeout(function(){
										$('.modalForm-register').modal('hide');
										$('#mymodal_success').modal('show');
									},300);
									setTimeout(function(){
										$('#mymodal_success').modal('hide');
									},5000);	
								},
								error: function(XMLHttpRequest, textStatus) {
									console.log('err', textStatus );
								}
							});
				}
				else{
					//$('.text-error-form').attr('style','display: block;');
					//$(".btn_contact_send").addClass('btn-disabled').attr("disabled",true);
				}

			});
			/*$("#mymodal_success").on('hidden.bs.modal', function(){
				location.reload();
			});*/


		}
	},
	scriptInventory: function(){
		if($('#slider_home_customers').length > 0) {
			var new_examples_carousel = $('#slider_home_customers');
			new_examples_carousel.owlCarousel ({
				items:1,
				nav:true,
				margin:0,
				loop: true,
				dots: true,
				responsive: {
					0: {
						autoHeight: false,
						mouseDrag: true,
						touchDrag: true,
					},
					768: {
						autoHeight: false,
					},
					1024: {
						autoHeight: false,
					},
					1200: {
						autoHeight: false,
					}
				},

				animateIn: 'scaleSlide',
				smartSpeed: 1500,
				autoplayTimeout: 1500
			});
			new_examples_carousel.find('.owl-next').html("<span class='navinext'>Xem tiếp</span>");
			new_examples_carousel.find('.owl-prev').html("<span class='naviprev'>Quay về</span>");
		}
	},	
};

HRV.All = {
	sliderCustomerLogo: function(){
		if ($('#owlSlider_brands').length > 0) {			
			var brand_carousel = $('#owlSlider_brands');
			brand_carousel.owlCarousel({				
				items: 6,
				loop: true,
				margin: 20,
				dots: false,
				autoplay: true,
				slideTransition: 'linear',
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				autoplaySpeed: 3000,
				smartSpeed: 1500,
				responsive: {
					0: {
						items:4,
						margin:10
					},
					768: {
						items: 5
					},
					992: {
						items: 6
					},
					1200: {
						items: 6,
						margin: 30
					}
				}
			});
		}	
	},
	sliderCustomerQuote: function() {
		if ($('#owlSlider_testimonial').length > 0) {
			var new_examples_carousel = $('#owlSlider_testimonial');
			new_examples_carousel.owlCarousel({
				items: 1,
				nav: true,
				margin:20,
				loop: true,
				dots: true,
				autoplay: false,
				smartSpeed:1500,
				autoplayTimeout: 9000,
				responsive: {
					0: {
						autoHeight: false,						
						autoplay: false,
						nav: false,
					},
					768: {
						autoHeight: false,						
						autoplay: false,
						nav: false,
					},
					992: {
						autoHeight: false,
						mouseDrag: false,
						//	animateIn: 'scaleSlide',
					}
				},
				onChanged: function(event) {
					setTimeout(function() {
						$('#owlSlider_customers').find('.owl-dot').each(function(index) {
							$(this).attr('aria-label', index + 1);
						});
					}, 400);
				}
			});
			new_examples_carousel.find('.owl-next').html(htmlnext + "<span class='navinext'>Xem tiếp</span>");
			new_examples_carousel.find('.owl-prev').html(htmlprev + "<span class='naviprev'>Quay về</span>");
		}
	},
	trustedBrandsSlider: function(){
		if ($('#trustedBrands_carousel').length > 0) {	
			var trustBrands_carousel = $('#trustedBrands_carousel');
			trustBrands_carousel.owlCarousel({				
				items: 9,
				loop: true,
				margin: 0,
				dots: false,
				autoplay: true,
				slideTransition: 'linear',
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				autoplaySpeed: 3000,
				smartSpeed: 3000,
				responsive: {
					0: {
						items: 4,
					},
					768: {
						items: 6,
					},
					992: {
						items: 8,
					},
					1200: {
						items: 9,
					}
				}
			});
		}
	},
	sliderTestimonialMobile: function(){
		var duration = 600;
		var testimonial_mkt= $('#customerTestimonial_carousel[data-carousel]');
		function mktCarousel_blockquote() {
			if ($(window).width() < 992) {
				if (!testimonial_mkt.hasClass('owl-carousel')) {
					testimonial_mkt.addClass('owl-carousel').owlCarousel({
						loop: true,
						dots: false,
						nav: false,
						margin: 0,
						stagePadding: 0,
						smartSpeed: 800,
						autoWidth:true,
					});

				};

			} else {
				if (testimonial_mkt.hasClass('owl-carousel')) {
					testimonial_mkt.trigger('destroy.owl.carousel');
					testimonial_mkt.removeClass('owl-carousel owl-loaded owl-drag');
				}
			}
		}
		mktCarousel_blockquote();
		$(window).resize(function() {			mktCarousel_blockquote();		});
	}
};

HRV.Homepage = {
	init: function() {
		var that = this;
		that.sliderTestimonialHome();
		that.sliderTrustedBrandsHome();
		that.tabsListSellingSolutions();
		that.tabsListMarketingSolutions('#tablist_solutions_marketing');
		that.tabsListMarketingSolutions('#tablist_solutions_manage');
		that.scrollSectionSolutions();
	},		
	sliderCustomerQuotes: function(){	
		var duration = 500;	 var syncedSecondary = true;
		var testimonialImage_carousel = $('#testimonialImage_carousel');
		var testimonialQuote_carousel = $('#testimonialQuote_carousel');
		testimonialImage_carousel.owlCarousel({
			items:1,nav: false,dots: false,	
			autoHeight: true, autoplay: false,
			margin:0,animateIn: 'fadeIn',animateOut: 'fadeOut',
			smartSpeed:1000,autoplayTimeout: 8000,
			responsive: {
				0: {
				},
				768: {

				},
				992: {
					mouseDrag: false,	touchDrag: false
				},
				1200: {
					mouseDrag: false,	touchDrag: false
				}
			}
		}).on('changed.owl.carousel', syncTestimonial2);
		testimonialQuote_carousel.owlCarousel({
			items: 1,
			nav: true,
			margin:0,
			loop: true,
			dots: false,
			autoplay: false,
			smartSpeed:1500,
			autoplayTimeout: 6000,
			responsive: {
				0: {
					autoHeight: false,	autoplay: false,
				},
				768: {
					autoHeight: false,autoplay: true
				},
				992: {
					autoHeight: false,mouseDrag: false,
				}
			},
		}).on('changed.owl.carousel', syncTestimonial1);
		testimonialQuote_carousel.find('.owl-next').html(htmlarrow_next);
		testimonialQuote_carousel.find('.owl-prev').html(htmlarrow_prev);

		var syncedSecondary = true;
		function syncTestimonial1(el) {
			var count = el.item.count - 1;
			var current = Math.round(el.item.index - (el.item.count / 2) - .5);

			if (current < 0) {
				current = count;
			}
			if (current > count) {
				current = 0;
			}
			testimonialImage_carousel
				.find(".owl-item")
				.removeClass("current")
				.eq(current)
				.addClass("current");
			var onscreen = testimonialImage_carousel.find('.owl-item.active').length - 1;
			var start = testimonialImage_carousel.find('.owl-item.active').first().index();
			var end = testimonialImage_carousel.find('.owl-item.active').last().index();

			if (current > end) {
				testimonialImage_carousel.data('owl.carousel').to(current, duration, true);
			}
			if (current < start) {
				testimonialImage_carousel.data('owl.carousel').to(current - onscreen, duration, true);
			}
		}
		function syncTestimonial2(el) {
			if (syncedSecondary) {
				var number = el.item.index;
				testimonialQuote_carousel.data('owl.carousel').to(number, duration, true);
			}
		}
	},
	scrollSectionSolutions: function(){	
		$(document).on("click",".overview-main-benefits .benefit--scroll",function(e) {
			e.preventDefault();
			var section_top = $(this).attr("data-section"); 			
			$('html, body').animate({
				scrollTop: $(section_top).offset().top - 90
			}, 800);
		});
	},
	tabsListSellingSolutions: function(){	
		var duration = 600;
		var solutionsNavs_carousel = $('#tablist_solutions_selling .solutions_navtabs_carousel[data-carousel]');
		var solutionsPanel_carousel = $('#tablist_solutions_selling .solutions_tabpanel_carousel');

		solutionsPanel_carousel.on('initialized.owl.carousel', function(property) {
			$('#tablist_solutions_selling .solutions_navtabs_carousel .navlist-item').eq(0).addClass("active");
		});	
		solutionsPanel_carousel.owlCarousel({
			items:1,nav: false,dots: false,	
			autoplay: false,	autoHeight: true,
			margin:0,	smartSpeed:800,autoplayTimeout: 1000,
			responsive: {
				0: {
					mouseDrag: true,	touchDrag: true
				},
				768: {
					mouseDrag: true,	touchDrag: true
				},
				992: {
					mouseDrag: false,	touchDrag: false
				},
			},
		});

		function navTabsCarouselSolutions() {
			if ($(window).width() < 992 ) {
				if(!solutionsNavs_carousel.hasClass('owl-carousel')){
					solutionsNavs_carousel.on('initialized.owl.carousel', function(property) {
						solutionsNavs_carousel.find('.navlist-item').removeClass('active');
						solutionsPanel_carousel.trigger('to.owl.carousel', [property.item.index, duration, true]);
					});
					solutionsNavs_carousel.addClass('owl-carousel').owlCarousel({
						items: 1,
						loop: false,dots: false,
						nav: true,margin:0,
						stagePadding: 0,
						smartSpeed:800,
						responsive: {
							0: {
								items: 1,
							},
							768: {
								items: 1,		
								margin:0,						
							},
						},
						onChanged: function (event) {
							setTimeout(function(){

							}, 800);
						}
					});
					solutionsNavs_carousel.on('changed.owl.carousel', function (e) {
						solutionsPanel_carousel.trigger('to.owl.carousel', [e.item.index, duration, true]);
					});
					solutionsPanel_carousel.on('changed.owl.carousel', function(event) {
						solutionsNavs_carousel.trigger('to.owl.carousel', [event.item.index, duration, true]);
					});
				}
			}
			else{
				if(solutionsNavs_carousel.hasClass('owl-carousel')) {
					solutionsNavs_carousel.trigger('destroy.owl.carousel');
					solutionsNavs_carousel.removeClass('owl-carousel owl-loaded owl-drag');
				}
				solutionsPanel_carousel.on('changed.owl.carousel', function(event) {
					solutionsNavs_carousel.find('.navlist-item').removeClass('active');
					var element = event.item.index ;
					solutionsNavs_carousel.find('.navlist-item:eq(' + element + ')').addClass('active');
				});

			}
		}
		navTabsCarouselSolutions();
		$(window).resize(function() { 	navTabsCarouselSolutions();	 });
		solutionsNavs_carousel.find('.navlist-link').on('click', function(e) {
			e.preventDefault();
			solutionsNavs_carousel.find('.navlist-item').removeClass('active');
			$(this).parent().addClass('active');
			var number = $(this).parent().index();
			solutionsPanel_carousel.trigger('to.owl.carousel', number);
		});
	},
	tabsListMarketingSolutions: function(target){	
		var duration = 600;
		var mktNavs_carousel = $(target+' .solutions_navtabs_carousel[data-carousel]');
		var mktPanel_carousel = $(target+' .solutions_tabpanel_carousel');

		mktPanel_carousel.on('initialized.owl.carousel', function(property) {
			mktNavs_carousel.find('.navlist-item').eq(0).addClass("active");
		});
		mktPanel_carousel.owlCarousel({
			items:1,nav: false,dots: false,	
			autoplay: false, autoHeight: true,
			margin:0,	smartSpeed:800,autoplayTimeout: 1000,


			responsive: {
				0: {
					mouseDrag: true,	touchDrag: true
				},
				768: {
					mouseDrag: true,	touchDrag: true
				},
				992: {
					mouseDrag: false,	touchDrag: false
				},
			},
		});

		function causelMarketingSolutions() {
			if ($(window).width() < 992 ) {
				if(!mktNavs_carousel.hasClass('owl-carousel')){
					mktNavs_carousel.on('initialized.owl.carousel', function(property) {
						mktPanel_carousel.trigger('to.owl.carousel', [property.item.index, duration, true]);
					});
					mktNavs_carousel.addClass('owl-carousel').owlCarousel({
						items: 1,
						loop: false,dots: false,
						nav: true,margin:0,
						stagePadding: 0,
						smartSpeed:800,
						responsive: {
							0: {
								items: 1,
							},
							768: {
								items: 1,		
								margin:0,						
							},
						},
						onChanged: function (event) {
							setTimeout(function(){

							}, 800);
						}
					});
					mktNavs_carousel.on('changed.owl.carousel', function (e) {
						mktPanel_carousel.trigger('to.owl.carousel', [e.item.index, duration, true]);
					});
					mktPanel_carousel.on('changed.owl.carousel', function(event) {
						mktNavs_carousel.trigger('to.owl.carousel', [event.item.index, duration, true]);
					});
				}
			}
			else{
				if(mktNavs_carousel.hasClass('owl-carousel')) {
					mktNavs_carousel.trigger('destroy.owl.carousel');
					mktNavs_carousel.removeClass('owl-carousel owl-loaded owl-drag');
				}
				mktPanel_carousel.on('changed.owl.carousel', function(event) {
					$(target).find('.navlist-item').removeClass('active');
					var element = event.item.index ;
					mktNavs_carousel.find('.navlist-item:eq(' + element + ')').addClass('active');
				});

			}
		}
		causelMarketingSolutions();
		$(window).resize(function() { 	causelMarketingSolutions();	 });
		$(target+' .solutions_navtabs_carousel .navlist-link').on('click', function(e) {
			e.preventDefault();
			$(target).find('.navlist-item').removeClass('active');
			$(this).parent().addClass('active');
			var number = $(this).parent().index();
			mktPanel_carousel.trigger('to.owl.carousel', number);
		});
	},
	sliderTestimonialHome: function() {
		var duration = 600;

		var testimonial_retail= $('.section-hrv-testimonials .testimonial-blockquote[data-carousel]');
		function hrRetail_carousel() {
			if ($(window).width() < 992) {
				if (!testimonial_retail.hasClass('owl-carousel')) {

					testimonial_retail.addClass('owl-carousel').owlCarousel({

						loop: true,
						dots: false,
						nav: false,
						margin: 0,
						stagePadding: 0,
						smartSpeed: 800,
						autoWidth:true,
					});

				};

			} else {
				if (testimonial_retail.hasClass('owl-carousel')) {
					testimonial_retail.trigger('destroy.owl.carousel');
					testimonial_retail.removeClass('owl-carousel owl-loaded owl-drag');
				}
			}
		}
		hrRetail_carousel();
		$(window).resize(function() {			hrRetail_carousel();		});

	},
	sliderTrustedBrandsHome: function(){
		if ($('#trustBrands-hrloyalty').length > 0) {	
			var shipbrands_carousel = $('#trustBrands-hrloyalty');
			shipbrands_carousel.owlCarousel({				
				items: 9,
				loop: true,
				margin: 0,
				dots: false,
				autoplay: true,
				slideTransition: 'linear',
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				autoplaySpeed: 3000,
				smartSpeed: 3000,
				responsive: {
					0: {
						items: 4,
					},
					768: {
						items: 6,
					},
					992: {
						items: 8,
					},
					1200: {
						items: 9,
					}
				}
			});
		}
	},
};



HRV.PageShip = {
	init: function() {
		var that = this;
		//that.fixedHeaderShip();
		that.sliderCustomerShip();
		that.sliderStoreCombo();
	},
	fixedHeaderShip: function() {
		/* scroll header */
		setTimeout(function() {		
			var ShipCurScrollTop = 0,
					ShipNavbarHeight = 400;
			$(window).scroll(function() {
				if (jQuery(window).scrollTop() > ShipCurScrollTop && jQuery(window).scrollTop() > ShipNavbarHeight) {
					$('body').removeClass('bodyScroll-up').addClass('bodyScroll-down');
				} 
				else {
					if (jQuery(window).scrollTop() > ShipNavbarHeight && jQuery(window).scrollTop() + $(window).height() + 150 < $(document).height()) {
						$('body').removeClass('bodyScroll-down').addClass('bodyScroll-up');
					}
				}
				if (jQuery(window).scrollTop() < ShipCurScrollTop && jQuery(window).scrollTop() < ShipNavbarHeight) {
					$('body').removeClass('bodyScroll-up').removeClass('bodyScroll-down');
				}
				ShipCurScrollTop = jQuery(window).scrollTop();
			})
		}, 300)
	},
	sliderCustomerShip: function(){
		if ($('#owlSlider-shipping-brands').length > 0) {	
			var shipbrands_carousel = $('#owlSlider-shipping-brands');
			shipbrands_carousel.owlCarousel({				
				items: 6,
				loop: true,
				margin: 20,
				dots: false,
				autoplay: true,
				slideTransition: 'linear',
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				autoplaySpeed: 3000,
				smartSpeed: 3000,
				responsive: {
					0: {
						items:4,
						margin:10
					},
					768: {
						items: 5
					},
					992: {
						items: 6
					},
					1200: {
						items: 6,
						margin: 30
					}
				}
			});
		}
		if ($('#owlSlider-shipping-testimonial').length > 0) {
			var testimonial_carousel = $('#owlSlider-shipping-testimonial');
			testimonial_carousel.owlCarousel({
				items: 1,
				nav: true,
				margin:20,
				loop: true,
				lazyLoad: true,
				dots: true,
				autoplay: false,
				smartSpeed:1500,
				autoplayTimeout: 9000,

				onResized: setOwlStageHeightShip,
				onTranslated: setOwlStageHeightShip,
				responsive: {
					0: {
						autoHeight: false,						
						autoplay: false,
						nav: false,
					},
					768: {
						autoHeight: false,						
						autoplay: false,
						nav: false,
					},
					992: {
						autoHeight: false,
						mouseDrag: false,
						//	animateIn: 'scaleSlide',
					}
				},
				onChanged: function(event) {
					setTimeout(function() {
						$('#owlSlider_customers').find('.owl-dot').each(function(index) {
							$(this).attr('aria-label', index + 1);
						});
					}, 400);
				}
			});
			testimonial_carousel.find('.owl-next').html(htmlnext + "<span class='navinext'>Xem tiếp</span>");
			testimonial_carousel.find('.owl-prev').html(htmlprev + "<span class='naviprev'>Quay về</span>");

			function setOwlStageHeightShip() {
				var maxHeight = 0;
				$('#owlSlider-shipping-testimonial .testimonial-item').each(function () { 
					var thisHeight = parseInt( $(this).height() );
					maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
				});
				$('#owlSlider-shipping-testimonial .owl-item ').css('height', maxHeight );
				$('#owlSlider-shipping-testimonial .owl-item .testimonial-item').css('height', maxHeight );						
			}
			testimonial_carousel.on('initialized.owl.carousel', function(event) {
				setOwlStageHeightShip();
			})
		}
	},
	sliderStoreCombo: function(){
		if ($('#listCombo-carousel').length > 0) {	
			var comboCarousel = $('#listCombo-carousel');
			comboCarousel.owlCarousel({				
				items: 4,
				loop: true,
				margin:00,
				nav: true,dots: false,
				autoplay: false,
				smartSpeed:1500,
				autoplayTimeout: 3000,
				responsive: {
					0: {
						items:2,	
					},
					768: {
						items: 3
					},
					992: {
						items: 4
					},
					1200: {
						items: 4,

					}
				}
			});
			comboCarousel.find('.owl-next').html('<svg viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.23482 0L0 3.29L10.5074 14L0 24.71L3.23482 28L17 14L3.23482 0Z"/></svg>');
			comboCarousel.find('.owl-prev').html('<svg viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7652 28L17 24.71L6.49258 14L17 3.29L13.7652 -2.82797e-07L1.22392e-06 14L13.7652 28Z"/></svg>');
		}
	},
	sliderPromotionShip: function(){
		if ($('#owlSlider-shipping').length > 0) {
			var shipping_carousel = $('#owlSlider-shipping');
			shipping_carousel.on('initialized.owl.carousel', function() {
				$(".slider-shipping-nav .slider-nav__item").first().addClass('active');
			})
			shipping_carousel.owlCarousel ({
				items:1,
				nav:true,
				margin:0,
				loop: true,
				dots: false,	
				autoplay : true,	
				animateOut: 'fxStickItOut',
				animateIn: 'fxStickItIn',	 
				responsive: {
					0: {
						nav:false,
						dots: true,
						mouseDrag: true,
						touchDrag: true,
						autoplayTimeout:8000,
						smartSpeed: 1500,	
						autoplaySpeed : 1500,			
						animateIn: 'fadeIn',
						animateOut: 'fadeOut',
					},
					768: {				
						nav:false,
						dots: true,
						mouseDrag: true,
						touchDrag: true,
						autoplayTimeout:8000,
						smartSpeed: 1500,	
						autoplaySpeed : 1500,			
						animateIn: 'fadeIn',
						animateOut: 'fadeOut',
					},
					992: {				
						mouseDrag: false,
						touchDrag: false,
					},
					1200: {
						mouseDrag: false,
						touchDrag: false,
						autoplayTimeout:10000
					}
				},
				onChanged: function (event) {
					setTimeout(function(){
						$('#owlSlider-shipping').find('.owl-dot').each(function(index) {
							$(this).attr('aria-label', index + 1);
						});
					}, 400);
				}
			});
			shipping_carousel.find('.owl-next').html("<span class='navinext'>Xem tiếp</span>");
			shipping_carousel.find('.owl-prev').html("<span class='naviprev'>Quay về</span>");
			shipping_carousel.on('changed.owl.carousel', function (event) {		
				$('.slider-shipping-nav .slider-nav__item').removeClass('active');
				var element = event.item.index + 1;
				var title = $('#owlSlider-shipping .owl-item:nth-child('+element+') a').attr('data-slide');
				$('.slider-shipping-nav .slider-nav__item a[data-item="'+title+'"]').parent().addClass('active');
				//$('.slider-shipping-nav .slider-nav__item:nth-child('+ element +')').addClass('active');
			});
			$('.slider-shipping-nav .slider-nav__item a').on('click', function(){
				$('.slider-shipping-nav .slider-nav__item').removeClass('active');
				$(this).parent().addClass('active');
				var number = $(this).parent().index();
				shipping_carousel.trigger('to.owl.carousel', number)
			});
		}
	},	
	fixedSidebarShipFeatures: function(){
		function ShipStickyNav(){
			var $menuContainer = $('.wrapper-features-container');
			var classFixed = 'js-sticky-fixed';
			var classAbs = 'js-sticky-init';
			var navWidth = $menuContainer.find('.aside-groupNav').width();			
			var scrollTop = window.scrollY;
			var getPageOffsetBottom = Math.round($('.wrapper-features-container').outerHeight()) + $('.wrapper-features-container').offset().top   -  Math.round($('.wrapper-features-container').find('.menuScroll-link').outerHeight()) - 80;
			var getPageOffsetTop = $('.wrapper-features-container').offset().top - 80;
			if (scrollTop > getPageOffsetBottom) {
				$menuContainer.addClass(classAbs);
				$('.wrapper-features-container').find('.aside-groupNav').css('width',navWidth);
				return;
			}
			if (scrollTop > getPageOffsetTop) {
				$menuContainer.addClass(classFixed).removeClass(classAbs);
				$('.wrapper-features-container').find('.aside-groupNav').css('width',navWidth);
				return;
			}
			$menuContainer.removeClass(classAbs).removeClass(classFixed);
		};
		if($('.shipping-features-content').length > 0){
			$(window).on('scroll', ShipStickyNav).on('resize', ShipStickyNav).on('load', ShipStickyNav);

			$(window).scroll(function(){
				$('.content-section-features > .section-item').each(function(){
					if(($(this).find('.groupTitle-feature h2').offset().top - $(window).scrollTop() + 500) < $(window).height() && ($(this).find('.groupTitle-feature h2').offset().top - $(window).scrollTop()) > 0 ){
						{					
							$('.menuScroll-link li').removeClass('active');
							$('.menuScroll-link li a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
							return;
						} 
					}
				})
			})

			$('.menuScroll-link li.scroll-link a[href*="#"]').click(function(e){
				e.preventDefault();
				$('.menuScroll-link li.scroll-link').removeClass('active');
				$(this).parent('li').addClass('active');	
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top - 80
				}, 600);
			});	
			if (jQuery(window).width() <= 767) {
				jQuery('.groupTitle-feature').on('click', function() {
					/*$(this).parents('.section-item').toggleClass('opened-pannel');
					$(this).parents('.section-item').find('.groupContent-feature').slideToggle('medium');*/

					if ($(this).parents('.section-item').hasClass('opened-pannel')) {
						$(this).parents('.section-item').removeClass('opened-pannel');
						$(this).parents('.section-item').find('.groupContent-feature').slideUp(300);
					} else {
						/*$('.groupContent-feature').slideUp(300);
						$('.section-item').removeClass('opened-pannel') ;*/
						$(this).parents('.section-item').addClass('opened-pannel');
						$(this).parents('.section-item').find('.groupContent-feature').slideDown(300);
						/*		var section_click = parseInt($(this).parents('.section-item').attr('data-section'));
						var offset_top = $('section#shipping-feature-1').offset().top + section_click*47;
						$('html, body').animate({
							scrollTop: offset_top - 80
						}, 600);*/
					}
				});
			}
		}
	}
};

HRV.Payment = {
	init: function() {
		var that = this;
		that.sliderCustomerPay();
		that.sliderPromotionPay();
	},	
	sliderCustomerPay: function(){
		if ($('#owlSlider-payment-brands').length > 0) {	
			var shipbrands_carousel = $('#owlSlider-payment-brands');
			shipbrands_carousel.owlCarousel({				
				items: 6,
				loop: true,
				margin: 20,
				dots: false,
				autoplay: true,
				slideTransition: 'linear',
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				autoplaySpeed: 3000,
				smartSpeed: 3000,
				responsive: {
					0: {
						items:4,
						margin:10
					},
					768: {
						items: 5
					},
					992: {
						items: 6
					},
					1200: {
						items: 6,
						margin: 30
					}
				}
			});
		}
		if ($('#owlSlider-payment-testimonial').length > 0) {
			var testimonial_carousel = $('#owlSlider-payment-testimonial');
			testimonial_carousel.owlCarousel({
				items: 1,
				nav: true,
				margin:20,
				loop: true,
				lazyLoad: true,
				dots: true,
				autoplay: false,
				smartSpeed:1500,
				autoplayTimeout: 9000,
				//onInitialized: setOwlHeightPay,
				//onResized: setOwlHeightPay,
				//onTranslated: setOwlHeightPay,
				responsive: {
					0: {
						autoHeight: false,						
						autoplay: false,
						nav: false,
					},
					768: {
						autoHeight: false,						
						autoplay: false,
						nav: false,
					},
					992: {
						autoHeight: false,
						mouseDrag: false,
						//	animateIn: 'scaleSlide',
					}
				},
				onChanged: function(event) {
					setTimeout(function() {
						$('#owlSlider_customers').find('.owl-dot').each(function(index) {
							$(this).attr('aria-label', index + 1);
						});
					}, 400);
				}
			});
			testimonial_carousel.find('.owl-next').html(htmlnext + "<span class='navinext'>Xem tiếp</span>");
			testimonial_carousel.find('.owl-prev').html(htmlprev + "<span class='naviprev'>Quay về</span>");		
		}
	},
	sliderPromotionPay: function(){
		if ($('#owlSlider-payment').length > 0) {
			var payment_carousel = $('#owlSlider-payment');
			payment_carousel.on('initialized.owl.carousel', function() {
				$(".slider-payment-nav .slider-nav__item").first().addClass('active');
			})
			payment_carousel.owlCarousel ({
				items:1,
				nav:true,
				margin:0,
				loop: true,
				dots: false,	
				autoplay : true,	
				animateOut: 'fxStickItOut',
				animateIn: 'fxStickItIn',	 
				responsive: {
					0: {
						nav:false,
						dots: true,
						mouseDrag: false,
						touchDrag: false,
						autoplayTimeout:8000,
						smartSpeed: 1500,	
						autoplaySpeed : 1500,			
						animateIn: 'fadeIn',
						animateOut: 'fadeOut',
					},
					768: {				
						nav:false,
						dots: true,
						mouseDrag: true,
						touchDrag: true,
						autoplayTimeout:8000,
						smartSpeed: 1500,	
						autoplaySpeed : 1500,			
						animateIn: 'fadeIn',
						animateOut: 'fadeOut',
					},
					992: {				
						mouseDrag: false,
						touchDrag: false,
					},
					1200: {
						mouseDrag: false,
						touchDrag: false,
						autoplayTimeout:10000
					}
				},
				onChanged: function (event) {
					setTimeout(function(){
						$('#owlSlider-shipping').find('.owl-dot').each(function(index) {
							$(this).attr('aria-label', index + 1);
						});
					}, 400);
				}
			});
			payment_carousel.find('.owl-next').html("<span class='navinext'>Xem tiếp</span>");
			payment_carousel.find('.owl-prev').html("<span class='naviprev'>Quay về</span>");
			payment_carousel.on('changed.owl.carousel', function (event) {		
				$('.slider-payment-nav .slider-nav__item').removeClass('active');
				var element = event.item.index + 1;
				var title = $('#owlSlider-payment .owl-item:nth-child('+element+') a').attr('data-slide');
				$('.slider-payment-nav .slider-nav__item a[data-item="'+title+'"]').parent().addClass('active');
				//$('.slider-shipping-nav .slider-nav__item:nth-child('+ element +')').addClass('active');
			});
			$('.slider-payment-nav .slider-nav__item a').on('click', function(){
				$('.slider-payment-nav .slider-nav__item').removeClass('active');
				$(this).parent().addClass('active');
				var number = $(this).parent().index();
				payment_carousel.trigger('to.owl.carousel', number)
			});
		}
	},	
};

HRV.Referral = {
	init: function() {
		var that = this;
		that.functionTotal();

	},
	functionTotal: function(){
		var indexActive = { 
			"essentials":["Unlimited","Advance"],
			"advance":["Essentials","Unlimited"],
			"unlimited":["Advance","Essentials"]
		};
		$(document).on('click','.listNav-tabs li .tabs-item__clicked',function(e) {
			e.preventDefault();
			var curDiv = $('.pricing-table-detail .table-intro') ;
			$('.listNav-tabs li.is-active').removeClass('is-active');
			$(this).parent().addClass('is-active');
			var currentIndex = $('.listNav-tabs li.is-active .tabs-item__clicked').attr('data-target-index'),
					currentName = $('.listNav-tabs li.is-active .tabs-item__clicked').attr('data-plan-name');
			curDiv.find('[headers*="price-"],[headers-index*="price-"]').removeClass('js-is-visible').hide();
			curDiv.find('[headers="price-'+ currentName +'"], [headers-index="price-'+ currentIndex +'"]').addClass('js-is-visible').show();
			var positionTop = jQuery('.pricing-table-detail').offset().top - 100;
			jQuery('body,html').animate({scrollTop: positionTop - 10 }, 700);

			/*if(indexActive[currentTarget][0] == ""){}*/
			$('.plan-arrow.plan-arrow--next').find('.plan-arrow__name').text(indexActive[currentName][1]);
			$('.plan-arrow.plan-arrow--prev').find('.plan-arrow__name').text(indexActive[currentName][0]);

		});
		$(document).on('click','.toolbar-plan-arrows .plan-arrow',function(e) {
			e.preventDefault();
			var targetName = $(this).find('.plan-arrow__name').text().toLowerCase();
			$('.listNav-tabs li button[data-plan-name="'+ targetName +'"]').click();
		});
		$(function () {
			$("[data-toggle='tooltip']").tooltip();
		});
		/*setTimeout(function () {
			jQuery(".tooltip-hover").hover(function() {
				jQuery(this).parent().find(".tooltip_item[data-toggle='tooltip']").tooltip('show');
			}, function() {
				jQuery(this).parent().find(".tooltip_item[data-toggle='tooltip']").tooltip('hide');
			}); 
		}, 545*1.33); // 545ms timing to load jQuery.js + network estimated delay 
		*/
		if($(window).width() >= 1200 &  $('#bg_video1').length >  0 ){
			$('#bg_video1').YTPlayer();
			$.mbYTPlayer.controls = {
				play: "<i class='fa fa-play' aria-hidden='true'></i>",
				pause: "<i class='fa fa-pause' aria-hidden='true'></i>",
				mute: "<i class='fa fa-volume-up' aria-hidden='true'></i>",
				unmute: "<i class='fa fa-volume-off' aria-hidden='true'></i>",
				onlyYT: '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g class="ytp-fullscreen-button-corner-0"><use class="ytp-svg-shadow" xlink:href="#ytp-id-25"></use><path class="ytp-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="ytp-id-25"></path></g><g class="ytp-fullscreen-button-corner-1"><use class="ytp-svg-shadow" xlink:href="#ytp-id-26"></use><path class="ytp-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="ytp-id-26"></path></g><g class="ytp-fullscreen-button-corner-2"><use class="ytp-svg-shadow" xlink:href="#ytp-id-27"></use><path class="ytp-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="ytp-id-27"></path></g><g class="ytp-fullscreen-button-corner-3"><use class="ytp-svg-shadow" xlink:href="#ytp-id-28"></use><path class="ytp-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="ytp-id-28"></path></g></svg>',
				showSite:'<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g class="ytp-fullscreen-button-corner-0"><use class="ytp-svg-shadow" xlink:href="#ytp-id-25"></use><path class="ytp-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="ytp-id-25"></path></g><g class="ytp-fullscreen-button-corner-1"><use class="ytp-svg-shadow" xlink:href="#ytp-id-26"></use><path class="ytp-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="ytp-id-26"></path></g><g class="ytp-fullscreen-button-corner-2"><use class="ytp-svg-shadow" xlink:href="#ytp-id-27"></use><path class="ytp-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="ytp-id-27"></path></g><g class="ytp-fullscreen-button-corner-3"><use class="ytp-svg-shadow" xlink:href="#ytp-id-28"></use><path class="ytp-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="ytp-id-28"></path></g></svg>',
				ytLogo: "Y"
			}
			$('#bg_video1').on("YTPReady", function() {	
				$('.mb_YTPUrl').on('click', function() {
					$('#bg_video1').YTPPause();
				});
			});
		}
		if($('.btnClick-referral-scroll').length > 0){
			$('.btnClick-referral-scroll').click(function(event){
				event.preventDefault() ;
				var positionTop = jQuery('.section-referral-industry').offset().top - 40;
				jQuery('body,html').animate({scrollTop: positionTop - 50 }, 500);
			});
		}
		if($('.pricing-table-expandable').length > 0){
			/*$(document).on("click",".btnClick-viewmore-detail",function(e){
				e.preventDefault();				
				$(this).parent().toggleClass('is-active');
				$(".pricing-table-expandable").slideToggle(600);
			});*/
			var htmlIcon = '<span class="ico ico-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g transform="translate(3.500000, 9.500000) scale(1, -1) rotate(-90.000000) translate(-3.500000, -9.500000) translate(-4.000000, 4.000000)"> <polygon transform="translate(8.000000, 7.535714) rotate(90.000000) translate(-8.000000, -7.535714) " points="5 3.78571429 6.125 2.66071429 11 7.53571429 6.125 12.4107143 5 11.2857143 8.75 7.53571429"></polygon> </g> </svg> </span>';
			$(document).on("click",".btnClick-viewmore-detail",function(e){
				e.preventDefault();
				if ($(this).parent().hasClass('open-content')) {
					var positionTop = jQuery('.pricing-container-expandable').offset().top - 100;
					jQuery('body,html').animate({scrollTop: positionTop - 10 }, 300);
					$(this).parent().removeClass('open-content');
					$(this).parent().find('a').html(htmlIcon + " Xem chi tiết tính năng")
					$(this).parents('.pricing-container-expandable').removeClass('showContent').find(".pricing-table-expandable").slideUp(300);
				} else {
					$(this).parent().addClass('open-content')
					$(this).parent().find('a').html(htmlIcon + " Ẩn chi tiết tính năng")
					$(this).parents('.pricing-container-expandable').addClass('showContent').find(".pricing-table-expandable").slideDown(600);
				}
			});

		}
	},

};

HRV.Onboarding = {
	init: function() {
		this.toggleSectionGroup();
	},
	toggleSectionGroup: function() {
		if($('#tbpricing-onboarding').length > 0){
			$('#tbpricing-onboarding .pricing-table-group [data-group-title^="group"]').click(function(){
				$(this).parent().toggleClass('is-active');
				if (jQuery(window).width() <= 991) {	
					$(this).parents('.pricing-table-group').find('.table-content_collape').stop().slideToggle('medium');
				}
			}); 
		}
	}
};

HRV.HRSocial = {
	init: function() {
		var that = this;

	},
	scriptFacebook:{				
		init: function() {
			var that = this;
			that.collapseChangeFeaturesHrs();
			that.tabsSellingHrs();
			that.sliderCustomerSocial();
		},
		collapseChangeFeaturesHrs: function(){	
			$('.section-hrsocail-features .features-content__title').click(function(){
				if(!$(this).parent().hasClass('is-active')) {
					$('.section-hrsocail-features .features-content__collapse').slideUp();
					$('.section-hrsocail-features .features-content__title').slideDown();
					$('.section-hrsocail-features .features-content__wrap').removeClass('is-active');

					$(this).parent().find('.features-content__title').stop().slideUp();
					$(this).parent().find('.features-content__collapse').stop().slideDown();
					$(this).parent().addClass('is-active');
				}
			});

		},
		tabsSellingHrs: function(){	
			var duration = 600;
			var sellingHrs_navs_carousel = $('#tablist_hrsocial_main .selling_navlist_carousel[data-carousel]');
			var sellingHrs_panel_carousel = $('#tablist_hrsocial_main .selling_tabpanel_carousel');

			sellingHrs_panel_carousel.on('initialized.owl.carousel', function(property) {
				$('#tablist_hrsocial_main .selling_navlist_carousel .navlist-item').eq(0).find(".navlist-item--link").addClass("active");
			});				
			sellingHrs_panel_carousel.owlCarousel({
				items:1,nav: false,dots: false,	
				autoplay: false, autoHeight: true,
				margin:0,	smartSpeed:800,autoplayTimeout: 1000,

				responsive: {
					0: {
						mouseDrag: true,	touchDrag: true
					},
					768: {
						mouseDrag: true,	touchDrag: true
					},
					992: {
						mouseDrag: false,	touchDrag: false
					},
				},
			});

			function sellingHrsCarousel() {
				if ($(window).width() < 992 ) {
					if(!sellingHrs_navs_carousel.hasClass('owl-carousel')){
						sellingHrs_navs_carousel.on('initialized.owl.carousel', function(property) {
							sellingHrs_panel_carousel.trigger('to.owl.carousel', [property.item.index, duration, true]);
						});
						sellingHrs_navs_carousel.addClass('owl-carousel').owlCarousel({
							items: 1,
							loop: false,dots: false,
							nav: true,margin:0,
							stagePadding: 0,
							smartSpeed:800,
							responsive: {
								0: {
									items: 1,
								},
								768: {
									items: 1,		
									margin:0,						
								},
							},
							onChanged: function (event) {
								setTimeout(function(){

								}, 800);
							}
						});
						sellingHrs_navs_carousel.on('changed.owl.carousel', function (e) {
							sellingHrs_panel_carousel.trigger('to.owl.carousel', [e.item.index, duration, true]);
						});
						sellingHrs_panel_carousel.on('changed.owl.carousel', function(event) {
							sellingHrs_navs_carousel.trigger('to.owl.carousel', [event.item.index, duration, true]);
						});
					}
				}
				else{
					if(sellingHrs_navs_carousel.hasClass('owl-carousel')) {
						sellingHrs_navs_carousel.trigger('destroy.owl.carousel');
						sellingHrs_navs_carousel.removeClass('owl-carousel owl-loaded owl-drag');
					}
					sellingHrs_panel_carousel.on('changed.owl.carousel', function(event) {
						sellingHrs_navs_carousel.find('.navlist-item--link').removeClass('active');
						var element = event.item.index ;
						sellingHrs_navs_carousel.find('.navlist-item:eq(' + element + ') .navlist-item--link').addClass('active');
					});

				}
			}
			sellingHrsCarousel();
			$(window).resize(function() { 	sellingHrsCarousel();	 });
			sellingHrs_navs_carousel.find('.navlist-item--link').on('click', function(e) {
				e.preventDefault();
				sellingHrs_navs_carousel.find('.navlist-item--link').removeClass('active');
				$(this).addClass('active');
				var number = $(this).parent().index();
				sellingHrs_panel_carousel.trigger('to.owl.carousel', number);
			});
		},
		sliderCustomerSocial: function(){
			var brand_carousel = $('#owlCustommer_hrSocial');
			brand_carousel.owlCarousel({
				items:4,
				loop:true,
				margin:0,
				dots:true,
				nav:false,
				stagePadding:80,
				center: true,
				autoplay : true,
				autoplaySpeed : 3000,
				smartSpeed: 1500,
				/*lideTransition: 'linear',
				autoplayTimeout : 3000,
					autoplayHoverPause : true,*/
				autoHeight:false,
				responsive: {
					0: {
						items: 1,
						margin:0,
						stagePadding:30,
					},
					768: {
						items: 2,
						stagePadding:40,
						center: false
					},
					992: {
						items:2,
						stagePadding:80,
						center: false
					},
					1200: {
						items:3,

					}
				}
			});
		},
	},
	scriptFeatures: {
		init: function() {
			var that = this;	
			that.pricingAccordionModule();
			that.pricingScrollCompare();
			that.pricingAccordionFaqs();
		},
		fcStickyNav: function(){
			var $menuContainer = $('.wrapper-compare-table');
			var classFixed = 'js-sticky-fixed';
			var classAbs = 'js-sticky-init';
			var scrollTop = window.scrollY;		
			var navWidth = $menuContainer.find('.compare-table-sidebar').width();		

			var getPageOffsetBottom = Math.round($('.wrapper-compare-table').outerHeight()) + $('.wrapper-compare-table').offset().top   -  Math.round($('.wrapper-compare-table').find('.menuScroll-link').outerHeight());
			var getPageOffsetTop = $('.wrapper-compare-table').offset().top + 70;
			if (scrollTop > getPageOffsetBottom) {
				$menuContainer.addClass(classAbs);
				$menuContainer.find('.asideNav-scroll').css('width',navWidth);
				return;
			}
			if (scrollTop > getPageOffsetTop) {
				$menuContainer.addClass(classFixed).removeClass(classAbs);
				$menuContainer.find('.asideNav-scroll').css('width',navWidth);
				return;
			}
			$menuContainer.removeClass(classAbs).removeClass(classFixed);
		},
		pricingAccordionModule: function(){	
			$('.pricing-accordion-trigger .accordion-link').click(function(){
				$(this).parent().toggleClass('js-is-active');			
				$(this).parent().siblings().stop().slideToggle('600');
				if ($('.pricing-compare-viewmore').hasClass('js-is-active')){
					$(window).on('scroll', HRV.HRSocial.scriptFeatures.fcStickyNav).on('resize',  HRV.HRSocial.scriptFeatures.fcStickyNav);
					$(window).scroll(function(){
						$('#pricingSocial-section .pricing-table-group').each(function(){
							if(($(this).offset().top - $(window).scrollTop() + 450) < $(window).height() && ($(this).offset().top - $(window).scrollTop()) > 0 ){
								{					
									$('.menuScroll-link li').removeClass('active');
									$('.menuScroll-link li a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
									return;
								} 
							}
						})
					})
				}

			}); 
		},
		pricingScrollCompare:function(){
			var scrollFeatures = '';
			if ($('#pricingSocial-scrollspy').length > 0){

			};
			$('#pricingSocial-scrollspy a[href*="#"]').click(function(e){
				e.preventDefault();
				$('#pricingSocial-scrollspy .pricing-table-group').removeClass('active');
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top - 70
				}, 500);		
			});	
			if($('.pricing-table-group').length > 0){
				$('.pricing-table-group [data-group-title^="group-"]').click(function(){
					$(this).parent().toggleClass('is-active');
					$(this).parents('.pricing-table-group').find('.intro-content-collape').stop().slideToggle('medium');
				}); 
			}
		},
		pricingAccordionFaqs:function(){
			if($('.section-hrsfeatures-questions .accordion-questions').length > 0){
				$('.section-hrsfeatures-questions .accordion-questions h2').click(function(){
					$(this).parents('.accordion-questions').toggleClass('is-active');
					$(this).parents('.accordion-questions').find('.accordion-questions__content').slideToggle('');
				}); 
			}
		}
	},
	scriptTemplates: {
		init: function() {
			var that = this;
			that.ajaxProductTemplate();
			that.tooltipTemplate();
		},
		tooltipTemplate: function(){
			$('.template-example-item .template--prices [data-toggle="tooltip"],.templates-product-details .product-price [data-toggle="tooltip"]').tooltip({
				trigger:"hover focus",
				delay: {show: 100, hide: 50},
				placement: function(popover, trigger) {
					var placement = jQuery(trigger).attr('data-placement');
					jQuery(popover).addClass('templale-tooltip');

					if (jQuery(trigger).offset().top - $(window).scrollTop() < 220) {
						return "bottom";
					}
					return placement;
				},
			}); 
		},
		ajaxProductTemplate: function(){

			var indexTabActive = -1;
			var loadTabTemps = function(urlhandle, tabIndex){
				$.ajax({
					url: urlhandle + '?view=hrsocial-templates',
					success: function(html){
						setTimeout(function() {	
							$('.section-templates-tabslits .tabslits-content  .tab-pane.show.active').attr('data-get', 'true').html(html);
							HRV.HRSocial.scriptTemplates.tooltipTemplate();
							/*setTimeout(function() {		jQuery(window).resize();	}, 300);*/
						},300);
					},
					error: function(){
						$('.section-templates-tabslits .tabslits-content .tab-pane.show.active').attr('data-get', 'true').html('');
					}
				})
			}
			indexTabActive = jQuery('#myTab-templates .template-menu__item .nav-link.active').parent().index();
			$('.section-templates-tabslits .tabslits-nav__button').find('span').text($('.template-menu__item .nav-link.active').text());

			$('#myTab-templates .nav-link[data-toggle="tab"]').on('shown.bs.tab', function(){
				if (jQuery(window).width() <= 767) {	
					$('.section-templates-tabslits .tabslits-nav__button').parent().removeClass('js-active-nav').find('.tabslits-nav__menulist').slideUp();
				}
				indexTabActive = jQuery('#myTab-templates .template-menu__item .nav-link.active').parent().index();
				var handleTab = $('#myTab-templates .template-menu__item .nav-link.active').attr('data-handle');
				/*	var sizeContent = $(".tabslits-content .tab-pane.active ").html().trim();
			if (sizeContent == '') 	loadTab(handleTab, indexTabActive);	*/
				if (jQuery('.section-templates-tabslits .tabslits-content .tab-pane.active').attr('data-get') == 'false' && handleTab != '') {
					loadTabTemps(handleTab, indexTabActive);
				}	
				$('.section-templates-tabslits .tabslits-nav__button').find('span').text($('.template-menu__item .nav-link.active').text());
				window.history.pushState({}, document.title, "#"+$('#myTab-templates .nav-link.active').attr('data-templates'));
			});
			$('.section-templates-tabslits .tabslits-nav__button').on('click', function() {
				$(this).parent().toggleClass('js-active-nav').find('.tabslits-nav__menulist').stop().slideToggle('');
			});	
			if(window.location.hash.split('#')[1]){
				$('#myTab-templates li.template-menu__item .nav-link[data-templates='+window.location.hash.split('#')[1]+']').trigger('click');
			}
		}

	},
};

HRV.HRLoyalty = {
	init: function() {
		var that = this;
		that.sliderTestimonialHrlyt();
		that.sliderTrustedBrandHrlyt();
		that.sliderFeatureHrl();
	},
	sliderTestimonialHrlyt: function(){
		var hrlyt_testimonial_carousel = $('#testimonial-hrloyalty');
		hrlyt_testimonial_carousel.owlCarousel({
			items:3,
			loop:true,
			margin:30,
			dots:false,
			nav:false,
			stagePadding:0,
			center: false,
			autoplay : true,
			autoplaySpeed : 3000,
			smartSpeed: 1500,
			autoHeight:false,
			responsive: {
				0: {
					items: 1,	margin:20,
					stagePadding:30,
				},
				768: {
					items: 2,
				},
				992: {
					items:2,
				},
				1200: {
					items:3,
				}
			}
		});
		$('.testimonial-owlnavs').on('click', '.custom-owl-prev', function() {
			hrlyt_testimonial_carousel.trigger('prev.owl.carousel', [800]);
		});
		$('.testimonial-owlnavs').on('click', '.custom-owl-next', function() {
			hrlyt_testimonial_carousel.trigger('next.owl.carousel', [800]);
		});
	},
	sliderTrustedBrandHrlyt: function(){
		if ($('#trustBrands-hrloyalty').length > 0) {	
			var shipbrands_carousel = $('#trustBrands-hrloyalty');
			shipbrands_carousel.owlCarousel({				
				items: 9,
				loop: true,
				margin: 0,
				dots: false,
				autoplay: true,
				slideTransition: 'linear',
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				autoplaySpeed: 3000,
				smartSpeed: 3000,
				responsive: {
					0: {
						items: 4,
					},
					768: {
						items: 6,
					},
					992: {
						items: 8,
					},
					1200: {
						items: 9,
					}
				}
			});
		}
	},
	sliderFeatureHrl: function(){	
		var duration = 600;
		var hrLoyalty_title = $('.features-pillar-2 .carousel__mobile');
		var hrLoyalty_pannel = $('.features-pillar-2  .carousel__wraplist[data-carousel]');
		hrLoyalty_title.owlCarousel({
			items: 1,
			loop: false,dots: false,
			nav: true,margin:0,
			stagePadding: 0,
			smartSpeed:800,
		});
		function hrLytPannel_carousel() {
			if ($(window).width() < 768 ) {
				if(!hrLoyalty_pannel.hasClass('owl-carousel')){

					hrLoyalty_pannel.on('initialized.owl.carousel', function(property) {
						hrLoyalty_title.trigger('to.owl.carousel', [property.item.index, duration, true]);
					});
					hrLoyalty_pannel.addClass('owl-carousel').owlCarousel({
						items: 1,
						loop: false,dots: false,
						nav: false,margin:0,
						stagePadding: 0,
						smartSpeed:800,
						responsive: {
							0: {
								items: 1,
							},
							768: {
								items: 1,		
								margin:0,						
							},
						},
						onChanged: function (event) {
							setTimeout(function(){

							}, 800);
						}
					});
					hrLoyalty_pannel.on('changed.owl.carousel', function (e) {
						hrLoyalty_title.trigger('to.owl.carousel', [e.item.index, duration, true]);
					});
					hrLoyalty_title.on('changed.owl.carousel', function(event) {
						hrLoyalty_pannel.trigger('to.owl.carousel', [event.item.index, duration, true]);
					});
				};

			}
			else{
				if(hrLoyalty_pannel.hasClass('owl-carousel')) {
					hrLoyalty_pannel.trigger('destroy.owl.carousel');
					hrLoyalty_pannel.removeClass('owl-carousel owl-loaded owl-drag');
				}
			}
		}
		hrLytPannel_carousel();
		$(window).resize(function() { 	hrLytPannel_carousel();	 });

	},
};

HRV.HRRetail = {
	init: function() {
		var that = this;
		that.sectionFeatureRetail();
		that.sliderIndustriesRetail();
		that.accordionQuestionsRetail();
		that.sliderTestimonialRetail();
	},
	sectionFeatureRetail: function() {
		$('#hrretail_scrollspy__sections .features-section__title').on('click',function(e){	
			$(this).parent().toggleClass('is-active');
			$(this).parents('.features-section__wrap').find('.features-section__collapse').stop().slideToggle(300);
		});
	},
	sliderIndustriesRetail: function() {
		var industryRetail_carousel = $('#owlRetail_industries');
		industryRetail_carousel.owlCarousel({
			loop: true,
			dots: false,
			nav: false, 	
			autoWidth:true,
			autoplay:true,
			autoplayTimeout:4000,	smartSpeed: 2000,

		});
	},
	accordionQuestionsRetail: function() {
		if ($('.hrv-retail-questions').length > 0) {
			$('.hrv-retail-questions .questions-item__title').click(function() {
				if ($(this).parent().hasClass('is-active')) {
					$(this).parent().removeClass('is-active');
					$(this).parent().find('.questions-item__content').slideUp(300);
				} else {
					$('.questions-item').removeClass('is-active');
					$('.questions-item').find('.questions-item__content').slideUp(300);
					$(this).parent().addClass('is-active');
					$(this).parent().find('.questions-item__content').slideDown(300);
				}
			});
		}
	},
	sliderTestimonialRetail: function() {
		var duration = 600;

		var testimonial_retail= $('.testimonial-blockquote[data-carousel]');
		function hrRetail_carousel() {
			if ($(window).width() < 992) {
				if (!testimonial_retail.hasClass('owl-carousel')) {

					testimonial_retail.addClass('owl-carousel').owlCarousel({

						loop: true,
						dots: false,
						nav: false,
						margin: 0,
						stagePadding: 0,
						smartSpeed: 800,
						autoWidth:true,
					});

				};

			} else {
				if (testimonial_retail.hasClass('owl-carousel')) {
					testimonial_retail.trigger('destroy.owl.carousel');
					testimonial_retail.removeClass('owl-carousel owl-loaded owl-drag');
				}
			}
		}
		hrRetail_carousel();
		$(window).resize(function() {			hrRetail_carousel();		});

	}
};

HRV.HRMarketing = { 
	init: function() {
		var that = this;
		that.scrollSectionMkt();
		that.tabslistChangeMkt('#tablist_solutions_mkt_1');
		that.tabslistChangeMkt('#tablist_solutions_mkt_2');
		that.accordionQuestionsMkt();
		that.sliderTrustedBrandMkt();
		that.sliderTestimonialMkt();
		that.textAnimateMKt();
	},
	textAnimateMKt:function(){
		var words = document.getElementsByClassName('word');
		var wordArray = [];
		var currentWord = 0;
		words[currentWord].style.opacity = 1;
		for (var i = 0; i < words.length; i++) {
			splitLetters(words[i]);
		}
		function changeWord() {
			var cw = wordArray[currentWord];
			var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
			for (var i = 0; i < cw.length; i++) {
				animateLetterOut(cw, i);
			}
			for (var i = 0; i < nw.length; i++) {
				nw[i].className = 'letter behind';
				nw[0].parentElement.style.opacity = 1;
				animateLetterIn(nw, i);
			}

			currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
		}
		function animateLetterOut(cw, i) {
			setTimeout(function() {
				cw[i].className = 'letter out';
			}, i*80);
		}

		function animateLetterIn(nw, i) {
			setTimeout(function() {
				nw[i].className = 'letter in';
			}, 340+(i*80));
		}
		function splitLetters(word) {
			var content = word.innerHTML;
			word.innerHTML = '';
			var letters = [];
			for (var i = 0; i < content.length; i++) {
				var letter = document.createElement('span');
				letter.className = 'letter';
				letter.innerHTML = content.charAt(i);
				word.appendChild(letter);
				letters.push(letter);
			}

			wordArray.push(letters);
		}
		changeWord();
		setInterval(changeWord, 4000);
	},
	tabslistChangeMkt: function(target){	
		var duration = 500;
		var mktCarousel_titles = $(target+' .owlCarousel_titles[data-carousel]');
		var mktCarousel_listphotos = $(target+' .owlCarousel_frames');
		mktCarousel_listphotos.on('initialized.owl.carousel', function(property) {
			mktCarousel_titles.find('.mktblock_title').eq(0).addClass("is-active")
		});
		mktCarousel_listphotos.owlCarousel({
			items:1,nav: false,dots: false,		loop: false,
			autoplay: false, autoHeight: false,		margin:0,
			animateIn: 'fadeIn',	animateOut: 'fadeOut',
			smartSpeed:600,autoplayTimeout: 1000,
			responsive: {
				0: {
					autoHeight: true,	mouseDrag: true,	touchDrag: true,
				},
				768: {
					autoHeight: true,	mouseDrag: true,	touchDrag: true
				},
				992: {
					mouseDrag: false,	touchDrag: false,
					animateIn: 'fadeIn',	animateOut: 'fadeOut'
				}
			},
		});
		function mktCarousel_heading() {
			if ($(window).width() < 992 ) {
				if(!mktCarousel_titles.hasClass('owl-carousel')){
					mktCarousel_titles.on('initialized.owl.carousel', function(property) {
						mktCarousel_listphotos.trigger('to.owl.carousel', [property.item.index, duration, true]);
					});
					mktCarousel_titles.addClass('owl-carousel').owlCarousel({
						items: 1,
						loop: false,dots: false,
						nav: true,autoHeight: true,
						stagePadding: 0,	smartSpeed:600,margin:20,
						responsive: {
							0: {
								items: 1,margin:12
							},
							768: {
								items: 1	
							},
						},
					});
					mktCarousel_titles.on('changed.owl.carousel', function (e) {
						mktCarousel_listphotos.trigger('to.owl.carousel', [e.item.index, duration, true]);
					});
					mktCarousel_listphotos.on('changed.owl.carousel', function(event) {
						mktCarousel_titles.trigger('to.owl.carousel', [event.item.index, duration, true]);
					});
				}
			}
			else{
				if(mktCarousel_titles.hasClass('owl-carousel')) {
					mktCarousel_titles.trigger('destroy.owl.carousel');
					mktCarousel_titles.removeClass('owl-carousel owl-loaded owl-drag');
				}
				/*
					mktCarousel_listphotos.on('changed.owl.carousel', function(event) {
						$(target).find('.mktblock_title').removeClass('is-active');
						$(target).find('.mktblock_title .block-item--desc').slideUp();
						var element = event.item.index ;
						mktCarousel_titles.find('.mktblock_title:eq(' + element + ')').addClass('is-active');
					});*/
			}
		}
		mktCarousel_heading();
		$(window).resize(function() { 	mktCarousel_heading();	 });
		$(target+' .mktblock_title .block-item--title').on('click', function(e) {
			e.preventDefault();
			$(target).find('.mktblock_title').removeClass('is-active');
			$(target).find('.mktblock_title .block-item--desc').slideUp();
			$(this).parents('.mktblock_title').addClass('is-active');
			$(this).parents('.mktblock_title').find('.block-item--desc').stop().slideDown();
			var number = $(this).parent().index();
			mktCarousel_listphotos.trigger('to.owl.carousel', number);
			//mktCarousel_listphotos.trigger('to.owl.carousel', [number, duration, true]);

		});
	},
	scrollSectionMkt: function(){
		$(document).on("click",".marketing-scroll .intro-box .intro-box__inner",function(e) {
			e.preventDefault();
			var positionTop = jQuery($.attr(this, 'clickedwrap')).position();
			jQuery('body,html').animate({scrollTop: positionTop.top - 95 }, 600);
		});
	},
	accordionQuestionsMkt: function() {
		if ($('.section-mkt-questions').length > 0) {
			$('.section-mkt-questions .questions-item__title').click(function() {
				if ($(this).parent().hasClass('is-active')) {
					$(this).parent().removeClass('is-active');
					$(this).parent().find('.questions-item__content').slideUp(300);
				} else {
					$('.section-mkt-questions .questions-item').removeClass('is-active');
					$('.section-mkt-questions .questions-item').find('.questions-item__content').slideUp(300);
					$(this).parent().addClass('is-active');
					$(this).parent().find('.questions-item__content').slideDown(300);
				}
			});
		}
	},
	sliderTrustedBrandMkt: function(){
		if ($('#mktCarousel_trustBrands').length > 0) {	
			var trustBrands_carousel = $('#mktCarousel_trustBrands');
			trustBrands_carousel.owlCarousel({				
				items: 9,
				loop: true,
				margin: 0,
				dots: false,
				autoplay: true,
				slideTransition: 'linear',
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				autoplaySpeed: 3000,
				smartSpeed: 3000,
				responsive: {
					0: {
						items: 4,
					},
					768: {
						items: 6,
					},
					992: {
						items: 8,
					},
					1200: {
						items: 9,
					}
				}
			});
		}
	},
	sliderTestimonialMkt: function() {
		var duration = 600;
		var testimonial_mkt= $('#mktCarousel_testimonial[data-carousel]');
		function mktCarousel_blockquote() {
			if ($(window).width() < 992) {
				if (!testimonial_mkt.hasClass('owl-carousel')) {
					testimonial_mkt.addClass('owl-carousel').owlCarousel({
						loop: true,
						dots: false,
						nav: false,
						margin: 0,
						stagePadding: 0,
						smartSpeed: 800,
						autoWidth:true,
					});

				};

			} else {
				if (testimonial_mkt.hasClass('owl-carousel')) {
					testimonial_mkt.trigger('destroy.owl.carousel');
					testimonial_mkt.removeClass('owl-carousel owl-loaded owl-drag');
				}
			}
		}
		mktCarousel_blockquote();
		$(window).resize(function() {			mktCarousel_blockquote();		});

	}
};

HRV.HRPartner = { 
	init: function() {
		var that = this;
		that.slideCustomersTalk();
		HRV.All.trustedBrandsSlider();
	},

	slideCustomersTalk: function() {
		var duration = 600;
		var testimonial_partner= $('#customers_talk_carousel');
		testimonial_partner.owlCarousel({
			loop: true,
			dots: false,
			nav: false,
			margin: 0,
			stagePadding: 0,
			autoWidth:true,
			autoplay:true,	autoplayTimeout:4000,	smartSpeed: 1500,
		});
	}
};

HRV.HROmnichannel = { 
	init: function() {
		var that = this;
		that.tabsListOmnichannel('#tabslist_omnichannel');
		that.accordionQuestionsOmni();
		HRV.All.sliderTestimonialMobile();
		HRV.All.trustedBrandsSlider();
	},
	tabsListOmnichannel: function(target){	
		var duration = 500;
		var OmniCarousel_titles = $(target+' .owlCarousel-titles[data-carousel]');
		var OmniCarousel_frames = $(target+' .owlCarousel-frames');

		OmniCarousel_frames.on('initialized.owl.carousel', function(property) {
			OmniCarousel_titles.find('.navtitle--item').eq(0).addClass("is-active");
			OmniCarousel_frames.find('.owl-item.active .block-frame').addClass('js-active');
		});
		OmniCarousel_frames.owlCarousel({
			items:1,nav: false,dots: false,		loop: false,
			autoplay: false, autoHeight: false,		margin:0,
			animateIn: 'fadeIn',	animateOut: 'fadeOut',
			smartSpeed:600,autoplayTimeout: 1000,  lazyLoad: true,
			responsive: {
				0: {
					autoHeight: true,	mouseDrag: true,	touchDrag: true,
				},
				768: {
					autoHeight: true,	mouseDrag: true,	touchDrag: true
				},
				992: {
					mouseDrag: false,	touchDrag: false,
					animateIn: 'fadeIn',	animateOut: 'fadeOut'
				}
			},
		});
		OmniCarousel_frames.on('changed.owl.carousel', function (e) {
			OmniCarousel_frames.find('.block-frame').removeClass('js-active');
			var source_src = OmniCarousel_frames.find('.owl-item:nth-child('+ (e.item.index + 1) +')').find(".block-frame").attr('data-video');
			OmniCarousel_frames.find('.owl-item:nth-child('+ (e.item.index + 1) +')').find(".block-frame").addClass('js-active ');	
			setTimeout(function() {
				if(source_src != '' ){
					if( OmniCarousel_frames.find('.block-frame.js-active').hasClass('first-load')){
						setTimeout(function() {
							OmniCarousel_frames.find('.block-frame.js-active img').attr('data-src', source_src);
							OmniCarousel_frames.find('.block-frame.js-active img').attr('src', source_src);
						}, 20);
					}
					else{
						OmniCarousel_frames.find('.block-frame.js-active').addClass('first-load');
					}
				}
			}, 40);

			OmniCarousel_titles.trigger('to.owl.carousel', [e.item.index, duration, true]);
		});
		function tabChangeOmniNavs() {
			if ($(window).width() < 992 ) {
				if(!OmniCarousel_titles.hasClass('owl-carousel')){
					OmniCarousel_titles.on('initialized.owl.carousel', function(property) {
						OmniCarousel_frames.trigger('to.owl.carousel', [property.item.index, duration, true]);
					});
					OmniCarousel_titles.addClass('owl-carousel').owlCarousel({
						items: 1,
						loop: false,dots: false,
						nav: true,autoHeight: false,
						stagePadding: 0,	smartSpeed:600,margin:20,
						responsive: {
							0: {
								items: 1,margin:12
							},
							768: {
								items: 1	
							},
						},
					});
					OmniCarousel_titles.on('changed.owl.carousel', function (e) {
						OmniCarousel_frames.trigger('to.owl.carousel', [e.item.index, duration, true]);
					});

				}
			}
			else{
				if(OmniCarousel_titles.hasClass('owl-carousel')) {
					OmniCarousel_titles.trigger('destroy.owl.carousel');
					OmniCarousel_titles.removeClass('owl-carousel owl-loaded owl-drag');
				}
				/*
							mktCarousel_listphotos.on('changed.owl.carousel', function(event) {
								$(target).find('.mktblock_title').removeClass('is-active');
								$(target).find('.mktblock_title .block-item--desc').slideUp();
								var element = event.item.index ;
								mktCarousel_titles.find('.mktblock_title:eq(' + element + ')').addClass('is-active');
							});*/
			}
		}
		tabChangeOmniNavs();
		$(window).resize(function() { 	tabChangeOmniNavs();	 });

		$(target+' .navtitle--item .box-title').on('click', function(e) {
			e.preventDefault();
			$(target).find('.navtitle--item').removeClass('is-active');
			$(target).find('.navtitle--item .box-desc').slideUp();
			$(this).parents('.navtitle--item').addClass('is-active');
			$(this).parents('.navtitle--item').find('.box-desc').stop().slideDown();

			var number = $(this).parents('.navtitle--item').index();
			OmniCarousel_frames.trigger('to.owl.carousel', number);

		});

	},
	accordionQuestionsOmni: function() {
		if ($('.section-omni-questions').length > 0) {
			var questionsParents = $('.section-omni-questions');
			questionsParents.find('.questions-item__title').click(function() {
				if ($(this).parent().hasClass('is-active')) {
					$(this).parent().removeClass('is-active');
					$(this).parent().find('.questions-item__content').slideUp(300);
				} else {
					questionsParents.find('.questions-item').removeClass('is-active');
					questionsParents.find('.questions-item').find('.questions-item__content').slideUp(300);
					$(this).parent().addClass('is-active');
					$(this).parent().find('.questions-item__content').slideDown(300);
				}
			});
		}
	},

};


$(document).ready(function() {
	HRV.init();
	if(window.template == 'page.partners-v1.3'){ 	HRV.HRPartner.init(); }
	if(window.template == 'page.omnichannel_v2.2'){ 	HRV.HROmnichannel.init(); }
	if(window.template == 'page.mkt-googleads'){
		if ($('#owlGoogleHrv-screen').length > 0) {
			var owlGoogleds = $('#owlGoogleHrv-screen[data-carousel]');
			function myCarouselGoogleAd() {
				if ($(window).width() < 992 ) {
					if(!owlGoogleds.hasClass('owl-carousel')){
						owlGoogleds.addClass('owl-carousel').owlCarousel({
							items: 1,
							loop: false,
							dots: false,
							nav: true,margin:0,
							stagePadding: 0,
							smartSpeed:800,
							responsive: {
								0: {
									items: 1,
								},
								768: {
									items: 2,		
									margin:0,						
								},
							},
							onChanged: function (event) {
								setTimeout(function(){
									//		owlGoogleds.find('.owl-item.active .lookbooks-banner .popover-dot:eq(0)').click();
								}, 800);
							}
						});
					}
				}
				else if(owlGoogleds.hasClass('owl-carousel')) {
					owlGoogleds.trigger('destroy.owl.carousel');
					owlGoogleds.removeClass('owl-carousel owl-loaded owl-drag');
				}
			}
			myCarouselGoogleAd();
			$(window).resize(function() {
				myCarouselGoogleAd();
			});
		}
	}
	/*if(window.template == 'page.hrsocial-livestream_v2'){
		if ($('#owlLive-auto').length > 0) {
			var owlLive = $('#owlLive-auto[data-carousel]');
			function myCarouselLive() {
				if ($(window).width() < 992 ) {
					if(!owlLive.hasClass('owl-carousel')){
						owlLive.addClass('owl-carousel').owlCarousel({
							items: 1,
							loop: false,
							dots: false,
							nav: true,margin:0,
							stagePadding: 0,
							smartSpeed:800,
							responsive: {
								0: {
									items: 1,
								},
								768: {
									items: 2,		
									margin:0,						
								},
							},
							onChanged: function (event) {
								setTimeout(function(){
									//		owlGoogleds.find('.owl-item.active .lookbooks-banner .popover-dot:eq(0)').click();
								}, 800);
							}
						});
					}
				}
				else if(owlLive.hasClass('owl-carousel')) {
					owlLive.trigger('destroy.owl.carousel');
					owlLive.removeClass('owl-carousel owl-loaded owl-drag');
				}
			}
			myCarouselLive();
			$(window).resize(function() {
				myCarouselLive();
			});
		}
	}*/
	if(window.template == 'page.haravan-plus' || window.template == 'page.socom-v1.0' || window.template == 'page.ominichannel-v1.9' || window.template == 'page.omnichannel_v1.9' || urlArray.indexOf(urlSegment) > -1){
		if ($('#owlSlider_brands').length > 0) {
			$('#owlSlider_brands').on('initialized.owl.carousel', function(event) {
				setOwlStageHeight();
			})
			var brand_carousel = $('#owlSlider_brands');
			brand_carousel.owlCarousel({
				items:8,
				loop:true,
				margin:20,
				dots:false,
				autoplay : true,
				slideTransition: 'linear',
				autoplayTimeout : 3000,
				autoplayHoverPause : true,
				autoplaySpeed : 3000,
				smartSpeed: 3000,
				responsive: {
					0: {
						items: 3,
						margin:15
					},
					768: {
						items: 5
					},
					992: {
						items: 6
					},
					1200: {
						items: 6,
						margin:30
					}
				}
			});
			function setOwlStageHeight() {
				var maxHeight = 0;
				$('#owlSlider_brands .owl-item').each(function() { 
					var thisHeight = parseInt($('#owlSlider_brands .owl-item').width());
					maxHeight = thisHeight;
				});
				//$('#owlSlider_brands .owl-item').css('height', maxHeight);
				//$('#owlSlider_brands .owl-item .item-logo img').css('max-height', maxHeight - 30);
				$('#owlSlider_brands .owl-item .item_lg').css('height', maxHeight);				
			}
		}
		if ($('#owlSlider_customers').length > 0) {
			var new_examples_carousel = $('#owlSlider_customers');
			new_examples_carousel.owlCarousel ({
				items:1,
				nav:true,
				margin:15,
				loop: true,
				dots: true,			
				animateIn: 'scaleSlide',
				autoplay : false,
				smartSpeed: 9000,
				autoplayTimeout: 9000,
				responsive: {
					0: {
						autoHeight: false,
						margin:15,
						smartSpeed:1000,
						autoplay : false,
					},
					768: {
						autoHeight: false,
						mouseDrag: false,
					},
					1024: {
						autoHeight: false,
						mouseDrag: false,
					},
					1200: {
						autoHeight: false,
						mouseDrag: false,	
					}
				},
				onChanged: function (event) {
					setTimeout(function(){
						$('#owlSlider_customers').find('.owl-dot').each(function(index) {
							$(this).attr('aria-label', index + 1);
						});
					}, 400);
				}
			});
			new_examples_carousel.find('.owl-next').html("<span class='navinext'>Xem tiếp</span>");
			new_examples_carousel.find('.owl-prev').html("<span class='naviprev'>Quay về</span>");
		}
	}

	$('.scroll a[href*="#"],a.scroll').click(function(e){
		e.preventDefault();
		if(jQuery('.mainHeader-hrv').hasClass('nav-sticky')){
			var headerHeight = $(".mainHeader-hrv.nav-sticky").height();			
			$('html, body').animate({
				scrollTop: ($($.attr(this, 'href')).offset().top + headerHeight) - 70
			}, 600);
		}
		else{
			$('html, body').animate({ 
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 600);
		}
		$("#showmenu-mobile").removeClass("active-icon");
		$(".mainHeader-hrv").removeClass("fixed-nav");
		$('.overlay-mobile').removeClass("show-rgb");
		$('body').removeClass('overflow-hidden');
		$("#navHeader").removeClass("show-menu");
	});
	if($('.pricing-table-group').length > 0){
		$('.pricing-table-group [data-group-title^="group-"]').click(function(){
			$(this).parent().toggleClass('is-active');
			$(this).parents('.pricing-table-group').find('.intro-content-collape').slideToggle('medium');
		}); 
	}
})


