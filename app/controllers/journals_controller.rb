class JournalsController < ApplicationController
    def index
        render json: Journal.all
    end

    def create 
        new_journal = Journal.new(journal_params)

        if new_journal.save
            render json: new_journal, serializer: JournalSerializer
        else 
            render json: {  errors: new_journal.errors.full_messages }, status: :not_found
        end
        end
end
