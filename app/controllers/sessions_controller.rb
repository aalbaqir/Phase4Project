class SessionsController < ApplicationController
#login
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            
            render json: user, status: :created

        else 
            # byebug
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized    
        end
    end
#log out    
def destroy
    session.delete(:user_id)
       # head :no_content
    render json: {session_user: session[:user_id]}
  end
end
