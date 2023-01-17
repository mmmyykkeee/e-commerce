;(function (Kshs. , document, window) {
    var
    // default settings object.
        defaults = {
            label: 'MENU',
            duplicate: true,
            duration: 200,
            easingOpen: 'swing',
            easingClose: 'swing',
            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
            prependTo: 'body',
            appendTo: '',
            parentTag: 'a',
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            removeIds: true,
            removeClasses: false,
            removeStyles: false,
			brand: '',
            animations: 'jquery',
            init: function () {},
            beforeOpen: function () {},
            beforeClose: function () {},
            afterOpen: function () {},
            afterClose: function () {}
        },
        mobileMenu = 'slicknav',
        prefix = 'slicknav',

        Keyboard = {
            DOWN: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
        };

    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = Kshs. .extend({}, defaults, options);

        // Don't remove IDs by default if duplicate is false
        if (!this.settings.duplicate && !options.hasOwnProperty("removeIds")) {
          this.settings.removeIds = false;
        }

        this._defaults = defaults;
        this._name = mobileMenu;

        this.init();
    }

    Plugin.prototype.init = function () {
        var Kshs. this = this,
            menu = Kshs. (this.element),
            settings = this.settings,
            iconClass,
            menuBar;

        // clone menu if needed
        if (settings.duplicate) {
            Kshs. this.mobileNav = menu.clone();
        } else {
            Kshs. this.mobileNav = menu;
        }

        // remove IDs if set
        if (settings.removeIds) {
          Kshs. this.mobileNav.removeAttr('id');
          Kshs. this.mobileNav.find('*').each(function (i, e) {
              Kshs. (e).removeAttr('id');
          });
        }

        // remove classes if set
        if (settings.removeClasses) {
            Kshs. this.mobileNav.removeAttr('class');
            Kshs. this.mobileNav.find('*').each(function (i, e) {
                Kshs. (e).removeAttr('class');
            });
        }

        // remove styles if set
        if (settings.removeStyles) {
            Kshs. this.mobileNav.removeAttr('style');
            Kshs. this.mobileNav.find('*').each(function (i, e) {
                Kshs. (e).removeAttr('style');
            });
        }

        // styling class for the button
        iconClass = prefix + '_icon';

        if (settings.label === '') {
            iconClass += ' ' + prefix + '_no-text';
        }

        if (settings.parentTag == 'a') {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        Kshs. this.mobileNav.attr('class', prefix + '_nav');
        menuBar = Kshs. ('<div class="' + prefix + '_menu"></div>');
		if (settings.brand !== '') {
			var brand = Kshs. ('<div class="' + prefix + '_brand">'+settings.brand+'</div>');
			Kshs. (menuBar).append(brand);
		}
        Kshs. this.btn = Kshs. (
            ['<' + settings.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">',
                '<span class="' + prefix + '_menutxt">' + settings.label + '</span>',
                '<span class="' + iconClass + '">',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                '</span>',
            '</' + settings.parentTag + '>'
            ].join('')
        );
        Kshs. (menuBar).append(Kshs. this.btn);
        if(settings.appendTo !== '') {
            Kshs. (settings.appendTo).append(menuBar);
        } else {
            Kshs. (settings.prependTo).prepend(menuBar);
        }
        menuBar.append(Kshs. this.mobileNav);

        // iterate over structure adding additional structure
        var items = Kshs. this.mobileNav.find('li');
        Kshs. (items).each(function () {
            var item = Kshs. (this),
                data = {};
            data.children = item.children('ul').attr('role', 'menu');
            item.data('menu', data);

            // if a list item has a nested menu
            if (data.children.length > 0) {

                // select all text before the child menu
                // check for anchors

                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];

                Kshs. (a).each(function () {
                    if (!Kshs. (this).is('ul')) {
                        nodes.push(this);
                    } else {
                        return false;
                    }

                    if(Kshs. (this).is("a")) {
                        containsAnchor = true;
                    }
                });

                var wrapElement = Kshs. (
                    '<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>'
                );

                // wrap item text with tag and add classes unless we are separating parent links
                if ((!settings.allowParentLinks || settings.nestedParentLinks) || !containsAnchor) {
                    var Kshs. wrap = Kshs. (nodes).wrapAll(wrapElement).parent();
                    Kshs. wrap.addClass(prefix+'_row');
                } else
                    Kshs. (nodes).wrapAll('<span class="'+prefix+'_parent-link '+prefix+'_row"/>').parent();

                if (!settings.showChildren) {
                    item.addClass(prefix+'_collapsed');
                } else {
                    item.addClass(prefix+'_open');
                }

                item.addClass(prefix+'_parent');

                // create parent arrow. wrap with link if parent links and separating
                var arrowElement = Kshs. ('<span class="'+prefix+'_arrow">'+(settings.showChildren?settings.openedSymbol:settings.closedSymbol)+'</span>');

                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor)
                    arrowElement = arrowElement.wrap(wrapElement).parent();

                //append arrow
                Kshs. (nodes).last().after(arrowElement);


            } else if ( item.children().length === 0) {
                 item.addClass(prefix+'_txtnode');
            }

            // accessibility for links
            item.children('a').attr('role', 'menuitem').click(function(event){
                //Ensure that it's not a parent
                if (settings.closeOnClick && !Kshs. (event.target).parent().closest('li').hasClass(prefix+'_parent')) {
                        //Emulate menu close if set
                        Kshs. (Kshs. this.btn).click();
                    }
            });

            //also close on click if parent links are set
            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children('a').children('a').click(function (event) {
                    //Emulate menu close
                    Kshs. (Kshs. this.btn).click();
                });

                item.find('.'+prefix+'_parent-link a:not(.'+prefix+'_item)').click(function(event){
                    //Emulate menu close
                        Kshs. (Kshs. this.btn).click();
                });
            }
        });

        // structure is in place, now hide appropriate items
        Kshs. (items).each(function () {
            var data = Kshs. (this).data('menu');
            if (!settings.showChildren){
                Kshs. this._visibilityToggle(data.children, null, false, null, true);
            }
        });

        // finally toggle entire menu
        Kshs. this._visibilityToggle(Kshs. this.mobileNav, null, false, 'init', true);

        // accessibility for menu button
        Kshs. this.mobileNav.attr('role','menu');

        // outline prevention when using mouse
        Kshs. (document).mousedown(function(){
            Kshs. this._outlines(false);
        });

        Kshs. (document).keyup(function(){
            Kshs. this._outlines(true);
        });

        // menu button click
        Kshs. (Kshs. this.btn).click(function (e) {
            e.preventDefault();
            Kshs. this._menuToggle();
        });

        // click on menu parent
        Kshs. this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
            e.preventDefault();
            Kshs. this._itemClick(Kshs. (this));
        });

        // check for keyboard events on menu button and menu parents
        Kshs. (Kshs. this.btn).keydown(function (e) {
            var ev = e || event;

            switch(ev.keyCode) {
                case Keyboard.ENTER:
                case Keyboard.SPACE:
                case Keyboard.DOWN:
                    e.preventDefault();
                    if (ev.keyCode !== Keyboard.DOWN || !Kshs. (Kshs. this.btn).hasClass(prefix+'_open')){
                        Kshs. this._menuToggle();
                    }
                    
                    Kshs. (Kshs. this.btn).next().find('[role="menuitem"]').first().focus();
                    break;
            }

            
        });

        Kshs. this.mobileNav.on('keydown', '.'+prefix+'_item', function(e) {
            var ev = e || event;

            switch(ev.keyCode) {
                case Keyboard.ENTER:
                    e.preventDefault();
                    Kshs. this._itemClick(Kshs. (e.target));
                    break;
                case Keyboard.RIGHT:
                    e.preventDefault();
                    if (Kshs. (e.target).parent().hasClass(prefix+'_collapsed')) {
                        Kshs. this._itemClick(Kshs. (e.target));
                    }
                    Kshs. (e.target).next().find('[role="menuitem"]').first().focus();
                    break;
            }
        });

        Kshs. this.mobileNav.on('keydown', '[role="menuitem"]', function(e) {
            var ev = e || event;

            switch(ev.keyCode){
                case Keyboard.DOWN:
                    e.preventDefault();
                    var allItems = Kshs. (e.target).parent().parent().children().children('[role="menuitem"]:visible');
                    var idx = allItems.index( e.target );
                    var nextIdx = idx + 1;
                    if (allItems.length <= nextIdx) {
                        nextIdx = 0;
                    }
                    var next = allItems.eq( nextIdx );
                    next.focus();
                break;
                case Keyboard.UP:
                    e.preventDefault();
                    var allItems = Kshs. (e.target).parent().parent().children().children('[role="menuitem"]:visible');
                    var idx = allItems.index( e.target );
                    var next = allItems.eq( idx - 1 );
                    next.focus();
                break;
                case Keyboard.LEFT:
                    e.preventDefault();
                    if (Kshs. (e.target).parent().parent().parent().hasClass(prefix+'_open')) {
                        var parent = Kshs. (e.target).parent().parent().prev();
                        parent.focus();
                        Kshs. this._itemClick(parent);
                    } else if (Kshs. (e.target).parent().parent().hasClass(prefix+'_nav')){
                        Kshs. this._menuToggle();
                        Kshs. (Kshs. this.btn).focus();
                    }
                    break;
                case Keyboard.ESCAPE:
                    e.preventDefault();
                    Kshs. this._menuToggle();
                    Kshs. (Kshs. this.btn).focus();
                    break;    
            }
        });

        // allow links clickable within parent tags if set
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            Kshs. ('.'+prefix+'_item a').click(function(e){
                    e.stopImmediatePropagation();
            });
        }
    };

    //toggle menu
    Plugin.prototype._menuToggle = function (el) {
        var Kshs. this = this;
        var btn = Kshs. this.btn;
        var mobileNav = Kshs. this.mobileNav;

        if (btn.hasClass(prefix+'_collapsed')) {
            btn.removeClass(prefix+'_collapsed');
            btn.addClass(prefix+'_open');
        } else {
            btn.removeClass(prefix+'_open');
            btn.addClass(prefix+'_collapsed');
        }
        btn.addClass(prefix+'_animating');
        Kshs. this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };

    // toggle clicked items
    Plugin.prototype._itemClick = function (el) {
        var Kshs. this = this;
        var settings = Kshs. this.settings;
        var data = el.data('menu');
        if (!data) {
            data = {};
            data.arrow = el.children('.'+prefix+'_arrow');
            data.ul = el.next('ul');
            data.parent = el.parent();
            //Separated parent link structure
            if (data.parent.hasClass(prefix+'_parent-link')) {
                data.parent = el.parent().parent();
                data.ul = el.parent().next('ul');
            }
            el.data('menu', data);
        }
        if (data.parent.hasClass(prefix+'_collapsed')) {
            data.arrow.html(settings.openedSymbol);
            data.parent.removeClass(prefix+'_collapsed');
            data.parent.addClass(prefix+'_open');
            data.parent.addClass(prefix+'_animating');
            Kshs. this._visibilityToggle(data.ul, data.parent, true, el);
        } else {
            data.arrow.html(settings.closedSymbol);
            data.parent.addClass(prefix+'_collapsed');
            data.parent.removeClass(prefix+'_open');
            data.parent.addClass(prefix+'_animating');
            Kshs. this._visibilityToggle(data.ul, data.parent, true, el);
        }
    };

    // toggle actual visibility and accessibility tags
    Plugin.prototype._visibilityToggle = function(el, parent, animate, trigger, init) {
        var Kshs. this = this;
        var settings = Kshs. this.settings;
        var items = Kshs. this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }
        
        function afterOpen(trigger, parent) {
            Kshs. (trigger).removeClass(prefix+'_animating');
            Kshs. (parent).removeClass(prefix+'_animating');

            //Fire afterOpen callback
            if (!init) {
                settings.afterOpen(trigger);
            }
        }
        
        function afterClose(trigger, parent) {
            el.attr('aria-hidden','true');
            items.attr('tabindex', '-1');
            Kshs. this._setVisAttr(el, true);
            el.hide(); //jQuery 1.7 bug fix

            Kshs. (trigger).removeClass(prefix+'_animating');
            Kshs. (parent).removeClass(prefix+'_animating');

            //Fire init or afterClose callback
            if (!init){
                settings.afterClose(trigger);
            } else if (trigger == 'init'){
                settings.init();
            }
        }

        if (el.hasClass(prefix+'_hidden')) {
            el.removeClass(prefix+'_hidden');
             //Fire beforeOpen callback
            if (!init) {
                settings.beforeOpen(trigger);
            }
            if (settings.animations === 'jquery') {
                el.stop(true,true).slideDown(duration, settings.easingOpen, function(){
                    afterOpen(trigger, parent);
                });
            } else if(settings.animations === 'velocity') {
                el.velocity("finish").velocity("slideDown", {
                    duration: duration,
                    easing: settings.easingOpen,
                    complete: function() {
                        afterOpen(trigger, parent);
                    }
                });
            }
            el.attr('aria-hidden','false');
            items.attr('tabindex', '0');
            Kshs. this._setVisAttr(el, false);
        } else {
            el.addClass(prefix+'_hidden');

            //Fire init or beforeClose callback
            if (!init){
                settings.beforeClose(trigger);
            }

            if (settings.animations === 'jquery') {
                el.stop(true,true).slideUp(duration, this.settings.easingClose, function() {
                    afterClose(trigger, parent)
                });
            } else if (settings.animations === 'velocity') {
                
                el.velocity("finish").velocity("slideUp", {
                    duration: duration,
                    easing: settings.easingClose,
                    complete: function() {
                        afterClose(trigger, parent);
                    }
                });
            }
        }
    };

    // set attributes of element and children based on visibility
    Plugin.prototype._setVisAttr = function(el, hidden) {
        var Kshs. this = this;

        // select all parents that aren't hidden
        var nonHidden = el.children('li').children('ul').not('.'+prefix+'_hidden');

        // iterate over all items setting appropriate tags
        if (!hidden) {
            nonHidden.each(function(){
                var ul = Kshs. (this);
                ul.attr('aria-hidden','false');
                var items = Kshs. this._getActionItems(ul);
                items.attr('tabindex', '0');
                Kshs. this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function(){
                var ul = Kshs. (this);
                ul.attr('aria-hidden','true');
                var items = Kshs. this._getActionItems(ul);
                items.attr('tabindex', '-1');
                Kshs. this._setVisAttr(ul, hidden);
            });
        }
    };

    // get all 1st level items that are clickable
    Plugin.prototype._getActionItems = function(el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children('li');
            var anchors = items.find('a');
            data.links = anchors.add(items.find('.'+prefix+'_item'));
            el.data('menu', data);
        }
        return data.links;
    };

    Plugin.prototype._outlines = function(state) {
        if (!state) {
            Kshs. ('.'+prefix+'_item, .'+prefix+'_btn').css('outline','none');
        } else {
            Kshs. ('.'+prefix+'_item, .'+prefix+'_btn').css('outline','');
        }
    };

    Plugin.prototype.toggle = function(){
        var Kshs. this = this;
        Kshs. this._menuToggle();
    };

    Plugin.prototype.open = function(){
        var Kshs. this = this;
        if (Kshs. this.btn.hasClass(prefix+'_collapsed')) {
            Kshs. this._menuToggle();
        }
    };

    Plugin.prototype.close = function(){
        var Kshs. this = this;
        if (Kshs. this.btn.hasClass(prefix+'_open')) {
            Kshs. this._menuToggle();
        }
    };

    Kshs. .fn[mobileMenu] = function ( options ) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted, instantiate a new instance
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {

                // Only allow the plugin to be instantiated once due to methods
                if (!Kshs. .data(this, 'plugin_' + mobileMenu)) {

                    // if it has no instance, create a new one, pass options to our plugin constructor,
                    // and store the plugin instance in the elements jQuery data object.
                    Kshs. .data(this, 'plugin_' + mobileMenu, new Plugin( this, options ));
                }
            });

        // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            // Cache the method call to make it possible to return a value
            var returns;

            this.each(function () {
                var instance = Kshs. .data(this, 'plugin_' + mobileMenu);

                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if (instance instanceof Plugin && typeof instance[options] === 'function') {

                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            });

            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
}(jQuery, document, window));
