class JournalsController < ApplicationController
    def index

        # if  session[:user_id]
            # user = User.find_by(id:session[:user_id])
            # render json: user.journals
            render json: User.first.journals

        # else
            # byebug
            # render json: {errors: "Please sign in"}
        # end    
    end



    def create 
        # journal_params.delete(:journal)
        new_journal = Journal.create(journal_params)
        # byebug
        if new_journal.save
            render json: new_journal, serializer: JournalSerializer
        else 
            
            render json: {  errors: new_journal.errors.full_messages }, status: :not_found
        end
        end


       private
       
       def journal_params
        params.permit!(:entry)
          
      end
end
