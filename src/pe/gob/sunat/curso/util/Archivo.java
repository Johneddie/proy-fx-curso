package pe.gob.sunat.curso.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import pe.gob.sunat.curso.model.Curso;
import pe.gob.sunat.curso.model.CursoWrapper;

/**
 * 
 * @author John
 *
 */
public class Archivo {
	
	FileReader lectura;
	BufferedReader contenido;
	public ObservableList<Curso> cargarCursos() {
		ObservableList<Curso> olCursos =FXCollections.observableArrayList(); 
		try {
			String CURSOSXML_PATH ="resources/xml/scurso.xml";
			JAXBContext gestor = JAXBContext.newInstance(CursoWrapper.class);
			Unmarshaller extractor =gestor.createUnmarshaller();
			CursoWrapper pw = (CursoWrapper) extractor.unmarshal(new File(CURSOSXML_PATH));

			olCursos.clear();
			olCursos.addAll(pw.getCursos());
			
		} catch (JAXBException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return olCursos;
	}

}
