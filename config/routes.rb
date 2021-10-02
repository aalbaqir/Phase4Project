Rails.application.routes.draw do
  
  resources :profiles
  resources :journals, only: [:index, :create]
  resources :users, only: [:index]
  resources :quotes, only: [:index]
  resources :usernames
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
