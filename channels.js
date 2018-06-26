$("#main").after(
'<div id="scroll-feature" class="horiz-scroll">' +
'<div class="scroller">' +
'<div class="left-scroll invisible">' +
'<p class="fa fa-angle-left"></p>' +
'</div>' +
'<div class="right-scroll">' +
'<p class="fa fa-angle-right"></p>' +
'</div>' +
'<div class="scroll-images scrollable-x">' +
 '<a href="https://dashthreadsco.com/pages/cultivate"><img src="https://cdn.shopify.com/s/files/1/2236/4837/products/DT-Cultivate-Hat_1600x.png?v=1522215247" class="kek" /></a>' +
'<a href=""><img src="" class="kek" /></a>' +
 '<a href="https://www.cultivategaming.com/"><img src="data:image/jpeg;base64,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" class="kek" /></a>' +
 '<a href=""><img src="" class="kek" /></a>' + 
 '<a href=""><img src="" /></a>' +
 '<a href=""><img src="" class="kek" /></a>' +
 '<a href=""><img src="" class="kek" /></a>' +
'<a href=""><img src="" class="kek" /></a>' +
'<a href=""><img src="" class="kek" /></a>' +

'</div></div></div>');
// The HorizontalScroller Class accepts a jQuery object as its only argument
// The argument is the parent container of the scrolling element
// The element requires an ID to differentiate HorizontalScroller instances

function HorizontalScroller(elem) {
  this.scrollbox = elem; // The scrollers viewable area
  this.scrollImages = this.scrollbox.find("img");
  this.leftScrollControl = this.scrollbox.siblings(".left-scroll");
  this.rightScrollControl = this.scrollbox.siblings(".right-scroll");

  // Listener to change visibility of left and right controls
  // when at scroll extremes
  this.scrollbox.on("scroll", this.evaluateControlVisibility.bind(this));
};

HorizontalScroller.prototype = {
  
  scrollboxWidth: function() {
    return this.scrollbox.outerWidth(true);
  }, 

  currentScrollPosition: function() {
    return this.scrollbox.scrollLeft();
  },

  currentRightPosition: function() {
    return this.currentScrollPosition() + this.scrollboxWidth() - this.totalWidths();
  },

  // Maps the image width of each image in the scroller
  imageWidths: function() {
    return $.map(this.scrollImages, function(img) { 
      return $(img).outerWidth(true);
    })
  },

  // Returns the total width of all the images, that is,
  // the total of the visible and overflow content.
  totalWidths: function() {
    return this.imageWidths().reduce(function(a,b) { return a+b});
  },

  // Returns the average width of all the images
  avgWidth: function() {
    return this.totalWidths() / this.imageWidths().length;
  },

  // Determines the number of images in view area.
  // Number of images changes with responsive CSS
  imagesAcross: function() {
    return Math.round( this.scrollboxWidth() / this.avgWidth() );
  },

  // maps the offset x-distance of each image
  // from the left edge of the view area
  imageOffsets: function() {
    return $.map(this.scrollImages, function(img) { 
      return Math.round($(img).position().left);
    }); 
  },

  // Returns the index of the first number in the given array
  // greater than the given value, or, returns the index of
  // the first positive number in the array
  indexOfFirst: function(array, value) {
    value = value || 0;
    var firstIndex;
    var i = 0;
    while (firstIndex === undefined && array.length > i) {
      if (array[i] >= value)
        firstIndex = i; 
      i += 1;
    }
    return firstIndex; 
  },

  // Returns the index of first image that is completely in view
  // within the scrollbox
  firstVisibleImageIndex: function() {
    return this.indexOfFirst(this.imageOffsets());
  },

  // Returns the first image that is completely in view 
  // within the scrollbox
  firstVisibleImage: function() {
    return this.scrollImages[this.firstVisibleImageIndex()];
  },

  // Returns the index of the last image with its left edge in view 
  // within the scrollbox
  lastVisibleImageIndex: function() {
    return this.firstVisibleImageIndex() + this.imagesAcross();
  },

  // Returns the last image with its left edge in view 
  // within the scrollbox
  lastVisibleImage: function() {
    return this.scrollImages[this.lastVisibleImageIndex()];
  },

  // Returns the difference between the scrollboxes left edge
  // and the left edge of the first fully visible image, that is,
  // how far in the first fully visible image is
  offset: function() {
    var offset = $(this.firstVisibleImage()).position().left;
    return Math.round(offset);
  },
  
  // Returns the combined scroll amount that the images have to travel
  // in order to land evenly within the scroll window. The resulting
  nextScrollPosition: function(direction) {
    var nextScrollPosition = this.currentScrollPosition() + this.offset();

    switch(direction) {
      case "left":
        nextScrollPosition -= this.scrollboxWidth();
        if (($(this.firstVisibleImage()).outerWidth(true) - this.offset()) < 0) {
          nextScrollPosition -= $(this.firstVisibleImage()).outerWidth(true);
        }
        break;
      case "right":
        nextScrollPosition += this.scrollboxWidth();
        if (this.offset() > 0) {
          nextScrollPosition -= $(this.firstVisibleImage()).outerWidth(true);
        }
        break;
    }
    return nextScrollPosition;
  },

  // Triggers the animation
  animateScroll: function(direction) {
    resetFocusedImg();
    var scroller = this;
    setTimeout(function() {
      scroller.scrollbox.animate({
        scrollLeft: scroller.nextScrollPosition(direction)
      }, this.scrollboxWidth())
    }.bind(this), 100);
  },

  hideScrollControl: function(control) {
    control.addClass("invisible");
  },

  showScrollControl: function(control) {
    control.removeClass("invisible");
  },

  scrollControlVisibility: function(control) {
    return control.hasClass("invisible");
  },
  
  scrollAtZero: function() {
    return this.currentScrollPosition() == 0;
  },

  scrollAtMax: function() {
    return this.currentRightPosition() >= -1;
  },

  evaluateControlVisibility: function() {
    var left = this.leftScrollControl;
    var right = this.rightScrollControl;
    var leftIsInvisible = this.scrollControlVisibility(left);
    var rightIsInvisible = this.scrollControlVisibility(right);

    if (this.scrollAtZero()) this.hideScrollControl(left);
    if (this.scrollAtMax()) this.hideScrollControl(right);
    if (!this.scrollAtZero() && leftIsInvisible) this.showScrollControl(left);
    if (!this.scrollAtMax() && rightIsInvisible) this.showScrollControl(right);
  }
};

// End HorizontalScroller.prototype

var scrollers = {};

// Detects scrollers in the DOM
function detectScrollers() {
  return $.map($(".horiz-scroll"), function(scroller) {
    return $(scroller).attr("id");
  });
}

// Generates a new HorizontalScroller for each scroller in DOM
function mapScrollers(scrollerIds) {
  scrollerIds.forEach(function(elem, i , arr) {
    var scroller = "#" + elem + " .scroll-images";
    scrollers[elem] = new HorizontalScroller( $(scroller) );
  });
}

// Gets the scroll direction to pass to animation function
function getScrollDirection(button) {
  return (button.hasClass("left-scroll")) ? "left" : "right"
}

// Triggers the scroll animation for specific scroller
// in a specific direction
function triggerAnimation(button) {
  var scrollId = button.closest(".horiz-scroll").attr("id");
  var scrollDirection = getScrollDirection(button);
  scrollers[scrollId].animateScroll(scrollDirection);
}

// Scroll buttons listener
function listenForScroll() {
  $(".left-scroll, .right-scroll").on("click", function() {
    var button = $(this);
    triggerAnimation(button);
  });
}

function resetFocusedImg() {
  $(".focused").removeClass("focused");
}

// listener for click, slides up
var horizontalScrollImg = $(".horiz-scroll .scroll-images img");
horizontalScrollImg.on("click", function() {
  if (!$(this).hasClass("focused"))
    resetFocusedImg();
  $(this).toggleClass("focused");
});

// Registers scrollers and initiates listeners 
function scrollerInit() {
  var scrollerIds = detectScrollers();
  mapScrollers(scrollerIds);
  listenForScroll();
}



// Begins the fun
scrollerInit();
