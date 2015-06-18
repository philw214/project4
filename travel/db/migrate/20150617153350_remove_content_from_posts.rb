class RemoveContentFromPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :content, :string
  end
end
