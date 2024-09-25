class CreateSongs < ActiveRecord::Migration[7.2]
  def change
    create_table :songs do |t|
      t.string :period
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
