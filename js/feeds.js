/*function FeedsCtrl($scope) {
	$scope.feeds = [
		{
			imgsrc: 'http://leoville.tv/podcasts/coverart/tnt144video.jpg',
			title: 'Tech News Today Video (large)',
			items: [
				{
					title: 'Tech News Today 601: You\'re Wearing It Wrong',
					mediaUrl: 'http://dts.podtrac.com/redirect.mp4/twit.cachefly.net/video/tnt/tnt0601/tnt0601_h264m_864x480_500.mp4',
					pubDate: 'Fri, 05 Oct 2012 19:57:06 -0000',
					originUrl: 'http://twit.tv/tnt/601',
					author: 'leo@leoville.com (Leo Laporte)',
					description: '<p><img src="http://feeds.twit.tv/coverart/tnt144videohi.jpg" align=right hspace=20 vspace=20 border=0 title="Tech News Today"/></p><p><b>Hosts:</b> <a href="http://www.tommerritt.com">Tom Merritt</a>, <a href="http://www.sarahlane.com">Sarah Lane</a>, <a href="http://twitter.com/iyaz">Iyaz Akhtar</a> and <a href="http://www.jasonhowell.net">Jason Howell</a></p><p>Why everybody still talks about Steve Jobs, AT&T\'s hot new tablets, Dish plans for Blockbuster, and more.</p><p><b>Guest:</b> <a href="http://hak5.org">Darren Kitchen</a></p><p>Download or subscribe to this show at <a href="http://twit.tv/tnt">twit.tv/tnt</a>.</p><p>Submit and vote on story coverage at <a href="http://technewstoday.reddit.com">technewstoday.reddit.com</a>.</p><p>Check out the full <a href="https://docs.google.com/a/twit.tv/spreadsheet/pub?key=0AnfwL2-_1Rv3dGJMVTZucmhwa3g1Wk01aGlyRVRaUVE&;gid=167">show notes</a> for today\'s episode.</p><p>We invite you to read, add to, and amend the wiki entry for this episode at <a href="http://wiki.twit.tv/wiki/Tech_News_Today_601">wiki.twit.tv</a>.</p><p>Thanks to <a href="http://cachefly.com">Cachefly</a> for the bandwidth for this show.</p><p><b>Running time:</b> 51:06</p>'
				}
			]
		},
		{
			imgsrc: 'http://leoville.tv/podcasts/coverart/twig600video.jpg',
			title: 'This WEEK in GOOGLE Video (large)'
		},
		{
			imgsrc: 'http://leoville.tv/podcasts/coverart/twit144video.jpg',
			title: 'this WEEK in TECH Video (large)'
		}
	];
}*/

function Feed(imgSrc, title, items) {
	var self = this;
	self.imgSrc = imgSrc;
	self.title = title;

	self.items = ko.observableArray(items);
}

function Item(author, description, mediaUrl, originUrl, pubDate, title) {
	var self = this;
	self.author = author;
	self.description = description;
	self.mediaUrl = mediaUrl;
	self.originUrl = originUrl;
	self.pubDate = pubDate;
	self.title = title;
	self.viewed = ko.observable(false);

	self.view = function(item) {
		self.viewed(item);
	}
}

function NetcastrModel() {
	var self = this;

	self.feeds = ko.observableArray([
		new Feed('http://leoville.tv/podcasts/coverart/tnt144video.jpg',
				'Tech News Today Video (large)',
				[
					new Item('leo@leoville.com (Leo Laporte)',
							'<p><img src="http://feeds.twit.tv/coverart/tnt144videohi.jpg" align=right hspace=20 vspace=20 border=0 title="Tech News Today"/></p><p><b>Hosts:</b> <a href="http://www.tommerritt.com">Tom Merritt</a>, <a href="http://www.sarahlane.com">Sarah Lane</a>, <a href="http://twitter.com/iyaz">Iyaz Akhtar</a> and <a href="http://www.jasonhowell.net">Jason Howell</a></p><p>Why everybody still talks about Steve Jobs, AT&T\'s hot new tablets, Dish plans for Blockbuster, and more.</p><p><b>Guest:</b> <a href="http://hak5.org">Darren Kitchen</a></p><p>Download or subscribe to this show at <a href="http://twit.tv/tnt">twit.tv/tnt</a>.</p><p>Submit and vote on story coverage at <a href="http://technewstoday.reddit.com">technewstoday.reddit.com</a>.</p><p>Check out the full <a href="https://docs.google.com/a/twit.tv/spreadsheet/pub?key=0AnfwL2-_1Rv3dGJMVTZucmhwa3g1Wk01aGlyRVRaUVE&;gid=167">show notes</a> for today\'s episode.</p><p>We invite you to read, add to, and amend the wiki entry for this episode at <a href="http://wiki.twit.tv/wiki/Tech_News_Today_601">wiki.twit.tv</a>.</p><p>Thanks to <a href="http://cachefly.com">Cachefly</a> for the bandwidth for this show.</p><p><b>Running time:</b> 51:06</p>',
							'http://dts.podtrac.com/redirect.mp4/twit.cachefly.net/video/tnt/tnt0601/tnt0601_h264m_864x480_500.mp4',
							'http://twit.tv/tnt/601',
							'Fri, 05 Oct 2012 19:57:06 -0000',
							'Tech News Today 601: You\'re Wearing It Wrong')
				])
	]);
	self.selectedFeed = ko.observable();

	self.selectFeed = function(feed) {
		self.selectedFeed(feed);
	};
}

ko.applyBindings(new NetcastrModel());