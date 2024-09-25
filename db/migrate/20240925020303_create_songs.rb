class CreateSongs < ActiveRecord::Migration[7.2]
  def change
    create_table :songs do |t|
      t.integer :period
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
