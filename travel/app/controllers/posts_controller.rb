class PostsController < ApplicationController
  # before_action :authenticate_user!

  def index
    if current_user
      @posts = current_user.posts
    else
      @posts = Post.all
    end
  end

  def new
    @post=Post.new
  end

  def create
    if current_user
      @post = current_user.posts.new(post_params)
    else
      @post = Post.new
    end
    @post.save
    redirect_to('/posts')
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    redirect_to('/posts')
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to('/posts')
  end

  private
  def post_params
    return params[:post].permit(:content)
  end

end
