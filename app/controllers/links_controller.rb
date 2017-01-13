class LinksController < ApplicationController
	layout false
	def fb
	    redirect_to('https://www.facebook.com/HighSeasDesignHouse/?fref=ts')
	end

	def insta
	    redirect_to('https://www.instagram.com/highseasdesign/')
	end
end


