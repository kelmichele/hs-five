class PhotosController < ApplicationController
	def index
		@photos = Photo.paginate(page: params[:page], per_page: 15)
	end
end
