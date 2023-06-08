

jQuery(document).ready(function() {
	var wow = new WOW(
	  {
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       false
	  }
	);
	wow.init();

		$(".timer").waypoint(function(){
		$(this).countTo()
		},{triggerOnce:!0,offset:"bottom-in-view"});
	
	
$('.skills').waypoint(function() {
	$('.knob').each(function () {
          var element = $(this);
          var perc = element.attr("value");  
          element.knob({ 
                'value': 0,
				'width': 200,			   
                'min':0,
                'max':100,
				'lineCap': 'butt',
                "readOnly":true,
                 'inputColor':' #ffffff',
                'bgColor':' #f7f7f7 ',
				'fgColor':' #00cfef ',
                "thickness":.2,// Thickness of Skill Knobs
				'dynamicDraw': true,
				'draw' : function () { $(this.i).val(this.cv); }
          });

		$({value: 0}).animate({ value: perc }, {
			duration: 3000,
			easing: 'swing',
			progress: function () {
			element.val(Math.ceil(this.value)).trigger('change')}
		});
	});
 }, { offset: '90%', triggerOnce: true });
 
});

