class RestaurantsController < ApplicationController
before_action :set_restaurants, only: [:show, :update, :destory]
  

def index
  @restaurants = Restaurant.all
  render json: @restaurants
  end

  def show
render json: @restaurants
  end

  def create 
    @restaurants = Restaurant.create(restaurant_params)
    render json: @restaurants

  def new

  end

  def edit
    @restaurant.edit_attributes(restaurant_params)
    render json: @restaurant
  end
  
  def destory 
    @restaurants.destory
    render json: {message: "Success"}
  end 

  private
  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end
  def restaurant_params
    params.require(:restaurant).permit(:name)
end 
end
end
