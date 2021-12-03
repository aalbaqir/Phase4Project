Rails.application.routes.draw do
  
  # resources :profiles
  resources :journals, only: [:index, :create]
  resources :users, only: [:show, :create, :destroy, :update]
  resources :quotes, only: [:index]
  resources :usernames
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "/profile", to: "users#index"
  patch "/profileupdate", to: "users#update"
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end