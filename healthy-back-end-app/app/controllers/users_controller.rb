class UsersController < ApplicationController
  before_action :require_token, only: [:show]


  def show
    if params [:id] ==@current_user.id.to_s
      render json: @current_user
    else 
      render json: { errors: "invalid user" }, status: :unauthorized
    end
  end


  def create 

    puts "\n\n\n\n\n" , user_params
    @user = User.create!(user_params)
    render json: @user
  end 


  private 
  def user_params
    params.require(:user).permit(:firstt_name, :last_name, :email, :password)
  end 
end



