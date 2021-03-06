Rails.application.routes.draw do
  root 'static_pages#home'

  get 'about' => 'static_pages#about'
  get 'clients' => 'static_pages#clients'
  get 'design' => 'static_pages#design'
  get 'ecommerce' => 'static_pages#ecommerce'
  get 'sem' => 'static_pages#sem'
  get 'squad_goals' => 'static_pages#team', as: 'squad_goals'
  get 'contact' => 'static_pages#contact'
  get 'photo-gallery' => 'static_pages#photo-gallery'
  get 'shopify' => 'static_pages#shopify'

  get '/fb', to: 'links#fb'
  get '/insta', to: 'links#insta'

  resources :photos, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
