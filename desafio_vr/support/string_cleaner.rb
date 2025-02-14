def remove_text_after_markers(input_string, markers)
    markers.each do |marker|
      if input_string.include?(marker)
        index = input_string.index(marker)
        input_string = input_string[0...index]
      end
    end
    input_string.strip
  end
  