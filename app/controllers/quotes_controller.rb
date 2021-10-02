class QuotesController < ApplicationController
    def index
        render json: Quote.all
    end

    def show
        render json: Quote.find_by(id: params[:id])
    end
end
