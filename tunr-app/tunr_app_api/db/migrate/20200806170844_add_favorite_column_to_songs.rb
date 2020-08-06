class AddFavoriteColumnToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :favorite, :boolean, default: false
  end
end
