class MenusController < ApplicationController
   before_action :set_menu, only: [:show, :update, :destory]
  
  def index
    @menus = Menu.all
    render json: @menus
  end

  def show
    render json: @menu
  end

  def create 
    @menus = Menu.create(menu_params)
    render json: @menus
  end

  def edit
    @menu.edit_attributes(menu_params)
    render json: @menu
  end

  def destroy 
    @menu.destory
    render json: {message: "success"}
  end

  private 

  def set_menu
  @menu = Menu.find(params[:id])
  end 

  def menu_params
    params.require(:menu).permit(:dish_item, :price, :calories, :description, :img, :restaurant_id)
  end

end 
