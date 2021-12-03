class UsersController < ApplicationController
wrap_parameters format: []
  
  def index
    render json: User.find_by(id: session[:user_id]), serializer: UserProfileSerializer
  end  


def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      # render json: { error: "Not authorized" }, status: :unauthorized
      render json: user

    end
end


  def create
    user = User.create!(user_new_params)
    
    render json: user
  end

  def destroy
    # byebug
    user_to_delete = User.find_by(id: session[:user_id])
    session.delete(:user_id)
    user_to_delete.destroy
    render json: {session_user: session[:user_id]}
  end

  
  
  
  def update
    edited_user = User.find_by_id( params[:id] )

    if edited_user.update(user_edit_params)
      render json: edited_user
    else
      render json: {errors: edited_user.errors.full_messages}
    end

  end

  private

 
  def render_unprocessable_entity(invalid)
    render json:{error:invalid.record.erros}, status: :unprocessable_entity
  end
  
  
  def user_new_params
    params.permit(:username, :password, :password_confirmation)
      
  end

  def user_edit_params
    params.permit(:picture, :bio)
  end




end
