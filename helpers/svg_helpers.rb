module SvgHelpers
  KEYS = {
    'blue_flower' => 'blue',
    'hero-desktop' => 'hero',
    'tall' => 'tall',
  }

  def inline_svg(path, prefix = nil)
    prefix ||= KEYS.fetch(path.split("/").last.split(".").first)

    contents = File.read(File.join("source", "images", path)).
      gsub(/id="/, "id=\"#{prefix}-").
      gsub(/url\(#/, "url(##{prefix}-")
  end
end
