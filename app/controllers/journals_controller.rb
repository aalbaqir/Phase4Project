class JournalsController < ApplicationController
    def index
            # user = User.find_by(id:session[:user_id])
        # if  session[:user_id]
            # user = User.find_by(id:session[:user_id])
            # render json: user.journals
            render json: Journal.all

        # else
            # byebug
            # render json: {errors: "Please sign in"}
        # end    
    end



    # def create 
    #     # journal_params.delete(:journal)
    #     new_journal = Journal.create!(journal_params)
    #     byebug
    #     if new_journal.save
    #         render json: new_journal, serializer: JournalSerializer
    #     else 
            
    #         render json: {  errors: new_journal.errors.full_messages }, status: :not_found
    #     end
    #     end

    def create 
       

        # user = User.find_by(id: session[:user_id])
        journal = Journal.create!(journal_params)

        render json: journal

        # byebug
        # if journal.save
        #     render json: journal, status: :created

        # else render json: journal.errors, status: :unprocessable_entity
        # end

    end

       private
       
       def journal_params
        params.require(:journal).permit(:entry, :user_id)
        
          
      end

    # def journal_params
    #     params.permit(:entry)
    # end
end
