class ApplicationController < ActionController::API
  include ActionController::Cookies
  # skip_before_action :verify_authenticity_token
  # before_action :authorized
  

      private
  
      def current_user
      @current_user = User.find_by_id(session[:user_id])
    
      end
  
      def authorized
          return render json:{error: "Not Authorized"}, status: :unauthorized 
          unless current_user
      end
          end
  
  end