(ns bob
  (require [clojure.string :as string]))

(defn- question? [phrase] (= \? (last phrase)))
(defn- shout?    [phrase] (= phrase (string/upper-case phrase)))
(defn- silence?  [phrase] (string/blank? phrase))

(defn response-for [phrase]
  (cond
    (silence?  phrase) "Fine. Be that way!"
    (shout?    phrase) "Woah, chill out!"
    (question? phrase) "Sure."
    :else              "Whatever."))