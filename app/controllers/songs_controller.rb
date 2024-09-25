class SongsController < ApplicationController
  before_action :query

  def index
    @songs = query
  end

  def show
    @songs = query
    @song = Song.find(params[:id])
  end

  private

  def query
    @q = Song.ransack(params[:q])
    return @q.result(distinct:true).order("title").page(params[:page]).per(10)
  end
  
end
